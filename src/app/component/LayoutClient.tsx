"use client";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useState } from "react";

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div className="flex">
        <div className="hidden lg:flex">
          <Sidebar />
        </div>
        <div className="lg:hidden">{showSidebar && <Sidebar />}</div>
        <main className="overflow-hidden flex-1 py-8 px-4">{children}</main>
      </div>
    </>
  );
}
