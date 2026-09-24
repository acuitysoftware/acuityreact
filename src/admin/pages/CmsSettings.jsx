import React, { useState, useMemo } from "react";
import { FiSearch, FiCopy, FiTrash2, FiEdit2 } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { BsGripVertical } from "react-icons/bs";
import CMSModal from "./components/CMSModal";

// Dnd-kit imports for smooth drag and drop
import {
  DndContext,
  closestCenter,
  PointerSensor,
  KeyboardSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const CmsSettings = () => {
  // State Management
  const [data, setData] = useState([
    { id: 1, page_title: "About Us", page_url: "about-us", short_description: "Learn more about us", rank: 1, status: true },
    { id: 2, page_title: "Privacy Policy", page_url: "privacy-policy", short_description: "Our privacy guidelines", rank: 2, status: true },
    { id: 3, page_title: "Terms & Conditions", page_url: "terms-conditions", short_description: "Terms of service", rank: 3, status: false },
    { id: 4, page_title: "Contact Us", page_url: "contact-us", short_description: "Get in touch", rank: 4, status: true },
    { id: 5, page_title: "FAQs", page_url: "faqs", short_description: "Frequently asked questions", rank: 5, status: true },
  ]);

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [selectedIds, setSelectedIds] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  // Filtered and Paginated Data
  const filteredData = useMemo(() => {
    return data.filter((item) =>
      item.page_title.toLowerCase().includes(search.toLowerCase())
    );
  }, [data, search]);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * itemsPerPage;
    const lastPageIndex = firstPageIndex + itemsPerPage;
    return filteredData.slice(firstPageIndex, lastPageIndex);
  }, [filteredData, currentPage, itemsPerPage]);

  // Handlers
  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const handleSelectRow = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedIds(currentTableData.map((item) => item.id));
    } else {
      setSelectedIds([]);
    }
  };

  const handleStatusChange = (id) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      )
    );
  };

  const handleDelete = async () => {
    if (selectedIds.length === 0) return alert("Please select a row to delete");
    if (!window.confirm("Are you sure you want to delete selected pages?")) return;

    setData((prev) => prev.filter((item) => !selectedIds.includes(item.id)));
    setSelectedIds([]);
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert("URL copied to clipboard");
  };

  // Dnd-kit Sensors
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 5 }, // Ensures clicks don't trigger drag
    }),
    useSensor(KeyboardSensor)
  );

  // Dnd-kit Drag End Handler
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = data.findIndex((item) => item.id === active.id);
    const newIndex = data.findIndex((item) => item.id === over.id);

    if (oldIndex !== -1 && newIndex !== -1) {
      // Use arrayMove for smooth local state update
      const newData = arrayMove(data, oldIndex, newIndex);
      
      // Re-calculate ranks globally
      const reRankedData = newData.map((item, index) => ({
        ...item,
        rank: index + 1,
      }));

      setData(reRankedData);

      // Find the moved item to send to API
      const updatedItem = reRankedData.find((i) => i.id === active.id);
      console.log("Sending new rank to API:", updatedItem);
      // Add your API call for rank update here
    }
  };

  const handleEdit = (item) => {
    setEditData(item);
    setIsModalOpen(true);
  };

  const handleAdd = () => {
    setEditData(null);
    setIsModalOpen(true);
  };

  const handleModalSubmit = (formData) => {
    if (editData) {
      setData((prev) =>
        prev.map((item) =>
          item.id === editData.id ? { ...item, ...formData } : item
        )
      );
    } else {
      const newItem = {
        id: Date.now(),
        ...formData,
        rank: data.length + 1,
        status: true,
      };
      setData((prev) => [...prev, newItem]);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">CMS Pages</h1>
      </div>

      {/* Toolbar */}
      <div className="bg-white p-4 rounded-lg shadow-sm mb-4 flex flex-col sm:flex-row gap-4 justify-between items-center">
        <div className="flex gap-2">
          {selectedIds.length > 0 && (
            <button
              onClick={handleDelete}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md flex items-center gap-2 transition-colors"
            >
              <FiTrash2 /> Delete Selected
            </button>
          )}
          <button
            onClick={handleAdd}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center gap-2 transition-colors"
          >
            <GoPlus /> Add Page
          </button>
        </div>

        <div className="relative w-full sm:w-64">
          <input
            type="text"
            placeholder="Search pages..."
            value={search}
            onChange={handleSearch}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          />
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="p-4 w-10">
                  <input
                    type="checkbox"
                    checked={selectedIds.length === currentTableData.length && currentTableData.length > 0}
                    onChange={handleSelectAll}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                </th>
                <th className="p-4 w-10"></th> {/* Drag Handle Column */}
                <th className="p-4 font-semibold text-gray-600 text-sm">Rank</th>
                <th className="p-4 font-semibold text-gray-600 text-sm">Page Title</th>
                <th className="p-4 font-semibold text-gray-600 text-sm">URL</th>
                <th className="p-4 font-semibold text-gray-600 text-sm">Status</th>
                <th className="p-4 font-semibold text-gray-600 text-sm text-right">Actions</th>
              </tr>
            </thead>
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <SortableContext
                items={currentTableData.map((item) => item.id)}
                strategy={verticalListSortingStrategy}
              >
                <tbody>
                  {currentTableData.map((item) => (
                    <SortableRow
                      key={item.id}
                      item={item}
                      selectedIds={selectedIds}
                      handleSelectRow={handleSelectRow}
                      handleStatusChange={handleStatusChange}
                      handleCopy={handleCopy}
                      handleEdit={handleEdit}
                    />
                  ))}
                  {currentTableData.length === 0 && (
                    <tr>
                      <td colSpan="7" className="p-4 text-center text-gray-500">
                        No data found
                      </td>
                    </tr>
                  )}
                </tbody>
              </SortableContext>
            </DndContext>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-gray-100">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>Items per page:</span>
            <select
              value={itemsPerPage}
              onChange={(e) => {
                setItemsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="border border-gray-300 rounded-md py-1 px-2 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className="px-3 py-1 border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
            >
              Previous
            </button>
            <span className="text-sm text-gray-700">
              Page <strong>{currentPage}</strong> of {Math.ceil(filteredData.length / itemsPerPage) || 1}
            </span>
            <button
              disabled={currentPage === Math.ceil(filteredData.length / itemsPerPage)}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className="px-3 py-1 border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <CMSModal
          isOpen={isModalOpen}
          initial={editData}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleModalSubmit}
        />
      )}
    </div>
  );
};

// =============================================
// Sortable Row Component
// =============================================
const SortableRow = ({
  item,
  selectedIds,
  handleSelectRow,
  handleStatusChange,
  handleCopy,
  handleEdit,
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    background: isDragging ? "#f0f9ff" : "white", // Light blue tint while dragging
    zIndex: isDragging ? 1000 : "auto",
  };

  return (
    <tr
      ref={setNodeRef}
      style={style}
      className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${isDragging ? "shadow-md" : ""}`}
    >
      <td className="p-4">
        <input
          type="checkbox"
          checked={selectedIds.includes(item.id)}
          onChange={() => handleSelectRow(item.id)}
          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
      </td>
      
      {/* Drag Handle - listeners and attributes applied here */}
      <td className="p-4">
        <button
          className="cursor-move text-gray-400 hover:text-gray-600 touch-none flex items-center justify-center"
          {...attributes}
          {...listeners}
        >
          <BsGripVertical size={20} />
        </button>
      </td>

      <td className="p-4 text-gray-700 text-sm">{item.rank}</td>
      <td className="p-4 text-gray-700 text-sm font-medium">{item.page_title}</td>
      <td className="p-4 text-gray-500 text-sm">
        <div className="flex items-center gap-2">
          <span>{`/${item.page_url}`}</span>
          <FiCopy
            className="cursor-pointer text-gray-400 hover:text-blue-500 transition-colors"
            onClick={() => handleCopy(item.page_url)}
          />
        </div>
      </td>
      <td className="p-4">
        <label className="inline-flex relative items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            checked={item.status}
            onChange={() => handleStatusChange(item.id)}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        </label>
      </td>
      <td className="p-4 text-right">
        <button
          onClick={() => handleEdit(item)}
          className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
        >
          <FiEdit2 size={14} /> Edit
        </button>
      </td>
    </tr>
  );
};

export default CmsSettings;