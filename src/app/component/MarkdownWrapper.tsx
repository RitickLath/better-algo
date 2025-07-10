"use client";

import MarkdownPreview from "@uiw/react-markdown-preview";

const MarkdownWrapper = ({ children }: { children: string }) => {
  return (
    <div style={{ backgroundColor: "transparent" }}>
      <MarkdownPreview
        className="list-inside [&>ul]:list-disc [&>ol]:list-decimal [&>ol]:-ml-2"
        source={children}
        style={{
          backgroundColor: "transparent",
          fontSize: "16px",
          lineHeight: "1.6",
        }}
      />
    </div>
  );
};

export default MarkdownWrapper;
