"use client";

import { PlanContexts } from "@/Context/DetailContext";
import React, { useContext } from "react";
import { FaCheck } from "react-icons/fa";
import { Bounce, toast } from "react-toastify";

const AddPlan = ({ detail }) => {
  const { addPlan = [], setAddPlan } = useContext(PlanContexts);

  const currentId = detail?.id || detail?._id;

  const isAlreadyAdded = Boolean(
    currentId &&
    addPlan.some((item) => String(item?.id || item?._id) === String(currentId)),
  );

  const handleAddPlan = (e) => {
    e.stopPropagation();

    if (!detail || !currentId) {
      toast.error("Invalid workout details!", {
        position: "top-right",
        theme: "dark",
      });
      return;
    }

    if (isAlreadyAdded) {
      toast.warning(
        `${detail?.name || "This exercise"} is already in your plan!`,
        {
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
          transition: Bounce,
        },
      );
      return;
    }

    setAddPlan((prevPlan) => [...prevPlan, detail]);

    toast.success("Added to today's plan!", {
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
        onClick={handleAddPlan}
        disabled={isAlreadyAdded}
        className={`font-semibold px-8 py-3 rounded-xl transition-all border flex items-center justify-center gap-2 ${
          isAlreadyAdded
            ? "bg-zinc-800 text-zinc-500 border-zinc-700 cursor-not-allowed" // Disabled Style
            : "bg-[#A3E635] hover:bg-[#8ed324] text-black border-[#A3E635] cursor-pointer" // Active Style
        }`}
      >
        {isAlreadyAdded ? (
          <>
            <FaCheck className="text-xs text-[#A3E635]" />
            <span>Added to Todays Plan</span>
          </>
        ) : (
          <span>Add to todays plan</span>
        )}
      </button>
    </div>
  );
};

export default AddPlan;
