// Need to manage the light and dark theme part and "prone" so we can adjust the headings size based on screen size.

"use client";

import React, { useState } from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";

const MarkdownWrapper = ({ children }: { children: string }) => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  return (
    <div style={{ backgroundColor: "transparent" }}>
      <MarkdownPreview
        className="list-disc list-inside [&>ul]:list-disc [&>ul]:-ml-3"
        source={children}
        wrapperElement={{ "data-color-mode": theme }}
        style={{ backgroundColor: "transparent" }}
      />
    </div>
  );
};

export default MarkdownWrapper;