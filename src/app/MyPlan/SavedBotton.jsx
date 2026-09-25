"use client";

import { PlanContexts } from "@/Context/DetailContext";
import Link from "next/link";
import React, { useContext } from "react";
import { Bounce, toast } from "react-toastify";

const SavedBotton = ({ detail }) => {
  const { savedBotton, setSavedBotton } = useContext(PlanContexts);
  const handleSavedPlan = () => {
    setSavedBotton([...savedBotton, detail]);
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
      <Link href="/MyPlan">
        <button
          className="btn border-base-300 font-semibold px-8"
          onClick={() => handleSavedPlan()}
        >
          Save for later
        </button>
      </Link>
    </div>
  );
};

export default SavedBotton;
