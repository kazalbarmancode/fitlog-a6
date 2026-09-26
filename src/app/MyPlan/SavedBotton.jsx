"use client";

import { PlanContexts } from "@/Context/DetailContext";
import React, { useContext } from "react";
import { FaBookmark, FaCheck } from "react-icons/fa";
import { Bounce, toast } from "react-toastify";

const SavedBotton = ({ detail }) => {
  const { savedBotton = [], setSavedBotton } = useContext(PlanContexts);

  const currentId = detail?.id || detail?._id;

  const isAlreadySaved = Boolean(
    currentId &&
    savedBotton.some(
      (item) => String(item?.id || item?._id) === String(currentId),
    ),
  );

  const handleSavedPlan = (e) => {
    e.stopPropagation();

    if (!detail || !currentId) {
      toast.error("Invalid details!", {
        position: "top-right",
        theme: "dark",
      });
      return;
    }

    if (isAlreadySaved) {
      toast.warning("Already saved for later!", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
        transition: Bounce,
      });
      return;
    }

    setSavedBotton((prev) => [...prev, detail]);

    toast.success(`${detail.name} Added To Save`, {
      position: "top-right",
      autoClose: 2000,
      theme: "dark",
      transition: Bounce,
    });
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleSavedPlan}
        disabled={isAlreadySaved}
        className={`font-semibold px-8 py-3 rounded-xl transition-all border flex items-center justify-center gap-2 ${
          isAlreadySaved
            ? "bg-zinc-800 text-zinc-500 border-zinc-700 cursor-not-allowed" 
            : "bg-[#27272A] hover:bg-[#3f3f46] text-white border-[#3F3F46] cursor-pointer"
        }`}
      >
        {isAlreadySaved ? (
          <>
            <FaCheck className="text-xs text-[#A3E635]" />
            <span>Saved</span>
          </>
        ) : (
          <>
            <FaBookmark className="text-xs text-zinc-400" />
            <span>Save for later</span>
          </>
        )}
      </button>
    </div>
  );
};

export default SavedBotton;
