"use client"
import { PlanContexts } from '@/Context/DetailContext';
import React, { useContext } from 'react';

const Save = () => {
    const {savedBotton=[]}=useContext(PlanContexts)
    return (
     <div className="bg-[#27272A] px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-[#3F3F46]">
      <span className="text-xs text-zinc-300 font-medium">Save</span>
      <span className="bg-[#A3E635] text-black font-extrabold px-2 py-0.5 rounded-full text-[10px]">
        {savedBotton.length}
      </span>
    </div>
    );
};

export default Save;