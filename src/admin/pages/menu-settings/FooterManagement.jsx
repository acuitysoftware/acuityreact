import React, { useState } from "react";
import { toast } from "react-toastify";
import { GoPlus } from "react-icons/go";
import { FiEdit2, FiTrash2, FiExternalLink } from "react-icons/fi";
import { BsGripVertical } from "react-icons/bs";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  KeyboardSensor,
  useSensor,
  useSensors,
  useDroppable,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import FooterLinkModal from "./components/FooterLinkModal";

// Footer columns: how many there are and each one's title. Swap this
// (and `links` below) for real API data once it's ready.
const INITIAL_COLUMNS = [
  { id: 1, title: "Company" },
  { id: 2, title: "Quick Links" },
  { id: 3, title: "Services" },
  { id: 4, title: "Support" },
];

const INITIAL_LINKS = [
  { id: 101, columnId: 1, rank: 1, label: "About Us", linkType: "internal", url: "/about" },
  { id: 102, columnId: 1, rank: 2, label: "Contact Us", linkType: "internal", url: "/contact" },
  { id: 103, columnId: 2, rank: 1, label: "Portfolio", linkType: "internal", url: "/portfolio" },
  { id: 104, columnId: 2, rank: 2, label: "Blog", linkType: "internal", url: "/blog" },
  { id: 105, columnId: 3, rank: 1, label: "Services", linkType: "internal", url: "/services" },
  { id: 106, columnId: 4, rank: 1, label: "Privacy Policy", linkType: "internal", url: "/privacy-policy" },
];

function uid() {
  return Date.now() + Math.floor(Math.random() * 1000);
}

export default function FooterManagement() {
  const [columns, setColumns] = useState(INITIAL_COLUMNS);
  const [links, setLinks] = useState(INITIAL_LINKS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editLink, setEditLink] = useState(null);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor)
  );

  const linksByColumn = (columnId) =>
    links.filter((l) => l.columnId === columnId).sort((a, b) => a.rank - b.rank);

  const reRank = (list) => list.map((item, index) => ({ ...item, rank: index + 1 }));

  // --- Column management -------------------------------------------------
  const addColumn = () => {
    const nextId = columns.length ? Math.max(...columns.map((c) => c.id)) + 1 : 1;
    setColumns((prev) => [...prev, { id: nextId, title: `Column ${nextId}` }]);
    toast.success("Footer column added");
  };

  const renameColumn = (id, title) => {
    setColumns((prev) => prev.map((c) => (c.id === id ? { ...c, title } : c)));
  };

  const deleteColumn = (id) => {
    if (linksByColumn(id).length > 0) {
      toast.error("Move or delete this column's links first.");
      return;
    }
    if (!window.confirm("Delete this footer column?")) return;
    setColumns((prev) => prev.filter((c) => c.id !== id));
    toast.success("Footer column deleted");
  };

  // --- Link CRUD -----------------------------------------------------------
  const openAdd = () => {
    setEditLink(null);
    setIsModalOpen(true);
  };

  const openEdit = (link) => {
    setEditLink(link);
    setIsModalOpen(true);
  };

  const deleteLink = (id) => {
    if (!window.confirm("Delete this footer link?")) return;
    const link = links.find((l) => l.id === id);
    setLinks((prev) => {
      const remaining = reRank(
        prev.filter((l) => l.id !== id && l.columnId === link.columnId)
      );
      const others = prev.filter((l) => l.columnId !== link.columnId);
      return [...others, ...remaining];
    });
    toast.success("Footer link deleted");
  };

  const handleModalSubmit = (form) => {
    if (editLink) {
      setLinks((prev) => {
        const moved = prev.map((l) => (l.id === editLink.id ? { ...l, ...form } : l));
        // if the column changed, re-rank both the old and new column
        if (form.columnId !== editLink.columnId) {
          const oldCol = reRank(moved.filter((l) => l.columnId === editLink.columnId));
          const newCol = reRank(moved.filter((l) => l.columnId === form.columnId));
          const others = moved.filter(
            (l) => l.columnId !== editLink.columnId && l.columnId !== form.columnId
          );
          return [...others, ...oldCol, ...newCol];
        }
        return moved;
      });
      toast.success("Footer link updated");
    } else {
      const columnLinks = linksByColumn(form.columnId);
      setLinks((prev) => [
        ...prev,
        { id: uid(), ...form, rank: columnLinks.length + 1 },
      ]);
      toast.success("Footer link added");
    }
    setIsModalOpen(false);
  };

  // --- Drag and drop (within a column, and across columns) ----------------
  const findColumnIdForLink = (linkId) => links.find((l) => l.id === linkId)?.columnId;

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;
    if (activeId === overId) return;

    const fromColumnId = findColumnIdForLink(activeId);
    // `over` is either another link (has a columnId) or an empty-column
    // droppable, whose id is `column-<id>`.
    const toColumnId = String(overId).startsWith("column-")
      ? Number(String(overId).replace("column-", ""))
      : findColumnIdForLink(overId);

    if (fromColumnId == null || toColumnId == null) return;

    setLinks((prev) => {
      if (fromColumnId === toColumnId) {
        const columnLinks = reRank(prev.filter((l) => l.columnId === fromColumnId));
        const oldIndex = columnLinks.findIndex((l) => l.id === activeId);
        const newIndex = columnLinks.findIndex((l) => l.id === overId);
        if (oldIndex === -1 || newIndex === -1) return prev;
        const reordered = reRank(arrayMove(columnLinks, oldIndex, newIndex));
        const others = prev.filter((l) => l.columnId !== fromColumnId);
        return [...others, ...reordered];
      }

      // Moving to a different column: append to end of target column
      const moved = prev.map((l) => (l.id === activeId ? { ...l, columnId: toColumnId } : l));
      const fromCol = reRank(moved.filter((l) => l.columnId === fromColumnId));
      const toCol = reRank(moved.filter((l) => l.columnId === toColumnId));
      const others = moved.filter(
        (l) => l.columnId !== fromColumnId && l.columnId !== toColumnId
      );
      return [...others, ...fromCol, ...toCol];
    });
  };

  return (
    <div>
      <div className="flex flex-wrap justify-between items-center gap-3 mb-6">
        <div>
          <h1 className="text-xl font-bold text-[#0e1b3d]">Footer Management</h1>
          <p className="text-sm text-slate-500">
            Decide how many footer columns you have, and drag links between and within them to set their order.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={addColumn}
            className="bg-slate-800 hover:bg-slate-900 text-white px-4 py-2 rounded-md flex items-center gap-2 text-sm font-semibold transition-colors"
          >
            <GoPlus /> Add Column
          </button>
          <button
            onClick={openAdd}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md flex items-center gap-2 text-sm font-semibold transition-colors"
          >
            <GoPlus /> Add Link
          </button>
        </div>
      </div>

      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {columns.map((col) => (
            <FooterColumn
              key={col.id}
              column={col}
              links={linksByColumn(col.id)}
              onRename={renameColumn}
              onDeleteColumn={deleteColumn}
              onEditLink={openEdit}
              onDeleteLink={deleteLink}
            />
          ))}
        </div>
      </DndContext>

      {isModalOpen && (
        <FooterLinkModal
          isOpen={isModalOpen}
          initial={editLink}
          columns={columns}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleModalSubmit}
        />
      )}
    </div>
  );
}

// One footer column card: editable title, delete-column button, and a
// sortable/droppable list of its links.
function FooterColumn({ column, links, onRename, onDeleteColumn, onEditLink, onDeleteLink }) {
  const { setNodeRef, isOver } = useDroppable({ id: `column-${column.id}` });

  return (
    <div className="bg-white border rounded-lg flex flex-col">
      <div className="p-3 border-b flex items-center justify-between gap-2">
        <input
          value={column.title}
          onChange={(e) => onRename(column.id, e.target.value)}
          className="text-sm font-bold text-[#0e1b3d] w-full outline-none bg-transparent"
        />
        <button
          onClick={() => onDeleteColumn(column.id)}
          className="text-slate-300 hover:text-red-500 shrink-0"
          title="Delete column"
        >
          <FiTrash2 size={14} />
        </button>
      </div>

      <SortableContext items={links.map((l) => l.id)} strategy={verticalListSortingStrategy}>
        <div
          ref={setNodeRef}
          className={
            "flex-1 p-2 space-y-2 min-h-[80px] rounded-b-lg transition-colors " +
            (isOver ? "bg-orange-50" : "")
          }
        >
          {links.map((link) => (
            <SortableLink key={link.id} link={link} onEdit={onEditLink} onDelete={onDeleteLink} />
          ))}
          {links.length === 0 && (
            <div className="text-xs text-slate-400 italic px-2 py-3 text-center">
              Drop a link here
            </div>
          )}
        </div>
      </SortableContext>
    </div>
  );
}

function SortableLink({ link, onEdit, onDelete }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: link.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 50 : "auto",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={
        "flex items-center gap-2 border rounded-md px-2 py-2 bg-white text-sm " +
        (isDragging ? "shadow-lg ring-2 ring-orange-300" : "")
      }
    >
      <button
        className="cursor-move text-gray-400 hover:text-gray-600 touch-none shrink-0"
        {...attributes}
        {...listeners}
      >
        <BsGripVertical size={16} />
      </button>

      <div className="flex-1 min-w-0">
        <div className="font-medium text-slate-700 truncate">{link.label}</div>
        <div className="text-xs text-slate-400 flex items-center gap-1 truncate">
          {link.linkType === "external" && <FiExternalLink size={10} />}
          {link.url}
        </div>
      </div>

      <button onClick={() => onEdit(link)} className="text-slate-400 hover:text-blue-600 shrink-0">
        <FiEdit2 size={14} />
      </button>
      <button onClick={() => onDelete(link.id)} className="text-slate-400 hover:text-red-500 shrink-0">
        <FiTrash2 size={14} />
      </button>
    </div>
  );
}