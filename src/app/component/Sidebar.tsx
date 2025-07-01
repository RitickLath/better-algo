"use client";

import Link from "next/link";
import React, { useState } from "react";
import { topics } from "../constant/topicMap";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(-1);
  const pathname = usePathname(); // Get current route path

  const handleToggle = (key: number) => {
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <aside
      className="sticky top-10 w-[220px] lg:w-[250px] h-[95vh] overflow-y-auto border-r border-[#3C3C3C] pt-8 px-4 
                 text-[var(--text-color)] bg-[var(--bg-color)] custom-scroll"
    >
      <ul className="space-y-2">
        {topics.map((topic, key) => {
          const isOpen = openIndex === key;

          return (
            <li key={key} className="transition-all duration-300">
              {/* Main topic button */}
              <button
                onClick={() => handleToggle(key)}
                className={`flex justify-between items-center w-full text-left pl-2 py-2 rounded-md transition-colors ${
                  isOpen
                    ? "bg-[var(--highlight-bg)] text-[#00b198]"
                    : "hover:bg-[var(--hover-bg)] hover:text-[#00b198]"
                }`}
              >
                <span>{topic.title}</span>
                <span className="text-lg">
                  {isOpen ? <FiChevronDown /> : <FiChevronRight />}
                </span>
              </button>

              {/* Expandable subtopics */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-[1000px]" : "max-h-0"
                }`}
              >
                <ul className="pl-3 mt-2 space-y-3">
                  {topic?.subtopics?.map((section, secIndex) => (
                    <li key={secIndex}>
                      {/* Section header */}
                      <div className="text-xs text-[var(--text-secondary)] uppercase tracking-wider font-semibold mb-1 px-2">
                        {section.section}
                      </div>

                      {/* Subtopic links */}
                      <ul className="space-y-1">
                        {section.items.map((sub, subIndexx) => {
                          const isActive = pathname === sub.href; // active page

                          return (
                            <li key={subIndexx}>
                              <Link
                                href={sub.href}
                                className={`block text-sm pl-3 py-1 rounded transition 
                                  ${
                                    isActive
                                      ? "bg-[var(--highlight-bg)] text-[#00b198]"
                                      : "hover:bg-[var(--hover-bg)] hover:text-[#00b198]"
                                  }`}
                              >
                                {sub.name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
