"use client";

import React from "react";
import { IoChevronDown } from "react-icons/io5";

const SortByMenu = ({ value, onChange }) => {
  
  const selectedValue =
    typeof value === "object" && value !== null
      ? value.value || "duration"
      : value || "duration";

  return (
    <div className="relative flex items-center bg-[#18181B] border border-[#27272A] px-3 py-1.5 rounded-lg text-xs text-zinc-400">
      <span className="mr-1.5 shrink-0">Sort By</span>
      <select
        value={String(selectedValue)} 
        onChange={(e) => onChange(e.target.value)}
        className="bg-transparent text-white font-medium cursor-pointer focus:outline-none appearance-none pr-5 z-10"
      >
        <option value="duration" className="bg-[#18181B] text-white">
          Duration
        </option>
        <option value="calories" className="bg-[#18181B] text-white">
          Calories
        </option>
        <option value="name" className="bg-[#18181B] text-white">
          Rating
        </option>
      </select>
      <IoChevronDown className="absolute right-2 text-zinc-400 pointer-events-none" />
    </div>
  );
};

export default SortByMenu;