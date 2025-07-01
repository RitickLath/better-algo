"use client";
import Link from "next/link";
import React, { useState } from "react";
import { topics } from "../constant/topicMap";

const Sidebar = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Toggle the expanded/collapsed state for a given topic
  const handleToggle = (key: number) => {
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <aside className="sticky border-r-[1px] border-[#3C3C3C] top-10 w-[220px] pt-8 lg:w-[250px] h-[95vh] overflow-y-auto pl-4">
      {/* Outer list for all main topics */}
      <ul className="space-y-2">
        {topics.map((topic, key) => (
          <li key={key}>
            {/* Topic title */}
            <div
              onClick={() => handleToggle(key)}
              className={`cursor-pointer pl-2 py-2 hover:text-[#009485] transition ${
                openIndex === key ? "text-[#009485] font-medium" : ""
              }`}
            >
              {topic.title}
            </div>

            {/* Subtopics - only visible if this topic is expanded */}
            {openIndex === key && (
              <ul className="pl-4 mt-1 space-y-2">
                {topic?.subtopics?.map((section, secIndex) => (
                  <li key={secIndex}>
                    {/* Section heading for a group of subitems */}
                    <div className="text-sm underline font-semibold text-secondary uppercase tracking-wide mb-1 px-2">
                      {section.section}
                    </div>

                    {/* Links under this section */}
                    <ul className="space-y-1">
                      {section.items.map((sub, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            href={sub.href}
                            className="block pl-2 py-1 text-sm hover:text-[#009485] transition"
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
