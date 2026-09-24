import React from "react";
import AdminPagePlaceholder from "../AdminPagePlaceholder";

// Global CMS configuration: manage the reusable block library, and
// (later) the list of pages that can be built from those blocks.
export default function CmsSettings() {
  return (
    <AdminPagePlaceholder
      title="CMS Settings"
      description="Manage the reusable content-block library and which pages use them."
    />
  );
}
