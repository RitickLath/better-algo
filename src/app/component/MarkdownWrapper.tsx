// Need to manage "prone" so we can adjust the headings size based on screen size.

"use client";

import React from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";

const MarkdownWrapper = ({ children }: { children: string }) => {
  return (
    <div style={{ backgroundColor: "transparent" }}>
      <MarkdownPreview
        className="list-disc list-inside [&>ul]:list-disc [&>ul]:-ml-3"
        source={children}
        style={{ backgroundColor: "transparent" }}
      />
    </div>
  );
};

export default MarkdownWrapper;
