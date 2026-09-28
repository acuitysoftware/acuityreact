import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FiChevronDown, FiChevronUp, FiPlus, FiTrash2 } from "react-icons/fi";
import { uid } from "../../../data/defaultData";

const inputClass = "min-w-0 rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100";

export default function HeaderManagement({ menu = [], save }) {
  const [items, setItems] = useState(menu);

  useEffect(() => setItems(menu), [menu]);

  const commit = (next) => {
    setItems(next);
    save?.({ menu: next });
  };

  const updateItem = (id, changes) => commit(items.map((item) => item.id === id ? { ...item, ...changes } : item));

  const addItem = () => {
    commit([...items, { id: uid(), label: "New menu item", link: "/", enabled: true }]);
    toast.success("Header menu item added");
  };

  const removeItem = (id) => {
    if (!window.confirm("Remove this menu item and its submenu links?")) return;
    commit(items.filter((item) => item.id !== id));
    toast.success("Header menu item removed");
  };

  const moveItem = (index, direction) => {
    const nextIndex = index + direction;
    if (nextIndex < 0 || nextIndex >= items.length) return;
    const next = [...items];
    [next[index], next[nextIndex]] = [next[nextIndex], next[index]];
    commit(next);
  };

  const updateChild = (parentId, childId, changes) => commit(items.map((item) =>
    item.id === parentId
      ? { ...item, children: (item.children || []).map((child) => child.id === childId ? { ...child, ...changes } : child) }
      : item
  ));

  const addChild = (parentId) => {
    commit(items.map((item) => item.id === parentId
      ? { ...item, children: [...(item.children || []), { id: uid(), label: "New submenu item", link: "/" }] }
      : item
    ));
    toast.success("Submenu item added");
  };

  const removeChild = (parentId, childId) => commit(items.map((item) => item.id === parentId
    ? { ...item, children: item.children.filter((child) => child.id !== childId) }
    : item
  ));

  return (
    <div className="mx-auto w-full max-w-5xl">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-bold text-[#0e1b3d]">Header Management</h1>
          <p className="text-sm text-slate-500">Edit the navigation links shown in your site header.</p>
        </div>
        <button type="button" onClick={addItem} className="inline-flex items-center gap-2 rounded-md bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600">
          <FiPlus /> Add Menu Item
        </button>
      </div>

      <div className="space-y-4">
        {items.map((item, index) => (
          <article key={item.id} className="rounded-lg border bg-white p-4 shadow-sm sm:p-5">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex shrink-0 flex-col">
                <button type="button" disabled={index === 0} onClick={() => moveItem(index, -1)} aria-label="Move menu item up" className="p-1 text-slate-400 hover:text-slate-700 disabled:opacity-30"><FiChevronUp /></button>
                <button type="button" disabled={index === items.length - 1} onClick={() => moveItem(index, 1)} aria-label="Move menu item down" className="p-1 text-slate-400 hover:text-slate-700 disabled:opacity-30"><FiChevronDown /></button>
              </div>
              <label className="flex min-w-0 flex-1 flex-col gap-1 text-xs font-medium text-slate-500 sm:min-w-[170px]">
                Label
                <input className={inputClass} value={item.label} onChange={(event) => updateItem(item.id, { label: event.target.value })} />
              </label>
              <label className="flex min-w-0 flex-[2] flex-col gap-1 text-xs font-medium text-slate-500 sm:min-w-[200px]">
                Link
                <input className={inputClass} value={item.link} onChange={(event) => updateItem(item.id, { link: event.target.value })} placeholder="/page or https://example.com" />
              </label>
              <label className="flex items-center gap-2 self-end pb-2 text-sm text-slate-600">
                <input type="checkbox" checked={item.enabled !== false} onChange={(event) => updateItem(item.id, { enabled: event.target.checked })} className="accent-orange-500" />
                Enabled
              </label>
              <button type="button" onClick={() => removeItem(item.id)} aria-label={`Remove ${item.label}`} className="self-end rounded-md p-2 text-slate-400 hover:bg-red-50 hover:text-red-600"><FiTrash2 /></button>
            </div>

            <div className="ml-0 mt-4 space-y-3 border-l-2 border-slate-100 pl-3 sm:ml-10 sm:pl-4">
              <div className="flex items-center justify-between gap-2">
                <h2 className="text-sm font-semibold text-slate-700">Dropdown links</h2>
                <button type="button" onClick={() => addChild(item.id)} className="inline-flex items-center gap-1 text-xs font-semibold text-orange-600 hover:text-orange-700"><FiPlus /> Add child</button>
              </div>
              {(item.children || []).length === 0 && <p className="text-xs text-slate-400">No dropdown links.</p>}
              {(item.children || []).map((child) => (
                <div key={child.id} className="flex flex-wrap items-center gap-2">
                  <input aria-label="Submenu label" className={`${inputClass} flex-1`} value={child.label} onChange={(event) => updateChild(item.id, child.id, { label: event.target.value })} placeholder="Label" />
                  <input aria-label="Submenu link" className={`${inputClass} flex-[2]`} value={child.link} onChange={(event) => updateChild(item.id, child.id, { link: event.target.value })} placeholder="/page or https://example.com" />
                  <button type="button" onClick={() => removeChild(item.id, child.id)} aria-label={`Remove ${child.label}`} className="rounded-md p-2 text-slate-400 hover:bg-red-50 hover:text-red-600"><FiTrash2 /></button>
                </div>
              ))}
            </div>
          </article>
        ))}
        {items.length === 0 && <div className="rounded-lg border border-dashed bg-white p-8 text-center text-sm text-slate-500">No header menu items yet. Add one to get started.</div>}
      </div>
      <p className="mt-4 text-xs text-slate-400">Changes are saved automatically and appear in the site header.</p>
    </div>
  );
}
