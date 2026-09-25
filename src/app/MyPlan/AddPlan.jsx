"use client";
import { PlanContexts } from "@/Context/DetailContext";
import Link from "next/link";
import React, { useContext } from "react";
import { Bounce, toast } from "react-toastify";

const AddPlan = ({ detail }) => {
  const { addPlan, setAddPlan } = useContext(PlanContexts);
  const handleAddPlan = () => {
    setAddPlan([...addPlan, detail]);
    toast.success("🦄 Add to wishlist!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
  return (
    <div>
      <Link href={"/MyPlan"}>
        <button
          className="btn bg-[#CCFF00] border-base-300 font-semibold px-8"
          onClick={() => handleAddPlan()}
        >
          Add to todays plan
        </button>
      </Link>
    </div>
  );
};

export default AddPlan;
