import React from "react";
import SectionRenderer from "./components/SectionRenderer";

// The homepage is just an ordered list of enabled CMS blocks.
// Reordering, enabling/disabling and editing all happen in the admin
// dashboard (see pages/Admin.jsx) and flow through the `sections` prop.
export default function Home({ sections }) {
  return (
    <div>
      {sections
        .filter((s) => s.enabled)
        .map((s) => (
          <SectionRenderer key={s.id} section={s} />
        ))}
    </div>
  );
}
