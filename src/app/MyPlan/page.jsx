"use client";

import React, { useContext, useState } from "react";
import { PlanContexts } from "@/Context/DetailContext";
import PlanSaveCard from "../Component/PlanSaveCard/PlanSaveCard";

const MyPlanPage = () => {
  const { addPlan, setAddPlan, savedBotton } = useContext(PlanContexts);
  const [activeTab, setActiveTab] = useState("Saved");
  const currentList = activeTab === "Saved" ? addPlan : savedBotton;

  const totalExercises = currentList.length;

  const totalMinutes = currentList.reduce((acc, curr) => {
    return acc + (Number(curr.duration) || 0);
  }, 0);

  const totalCalories = currentList.reduce((acc, curr) => {
    return acc + (Number(curr.caloriesBurned) || 0);
  }, 0);

  const handleRemove = (id) => {
    if (activeTab === "today") {
      setAddPlan(addPlan.filter((item) => String(item.id) !== String(id)));
    }
  };

  return (
    <div>
      <div className="mx-10 my-10">
        <h1 className="text-white font-bold text-4xl mb-3">My Plan</h1>
        <p className=" text-[#8A92A0]">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>
      <div className="flex justify-around bg-[#232732] mx-10 p-10 mt-4">
        <div className="flex flex-col items-center">
          <h1 className="text-[#8A92A0]">Exercises</h1>
          <span className="text-[#CCFF00] text-4xl font-bold">
            {totalExercises}
          </span>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-[#8A92A0]">Minutes</h1>
          <span className="text-white text-4xl font-bold">{totalMinutes}</span>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-[#8A92A0]">Calories</h1>
          <span className="text-white text-4xl font-bold">{totalCalories}</span>
        </div>
      </div>
      <div className="flex mx-10">
        <div className="tabs-lift tabs min-w-max">
          <input
            type="radio"
            name="my_tabs_7"
            className="tab z-1"
            aria-label="Today's Plan"
          />
          <div className="sticky tab-content max-w-60 border-base-300 bg-base-100 p-6">
         <PlanSaveCard></PlanSaveCard>
          </div>
          <input
            type="radio"
            name="my_tabs_7"
            className="tab z-1"
            aria-label="Saved"
            defaultChecked
          />
          <div className="sticky tab-content max-w-60 border-base-300 bg-base-100 p-6">
          <PlanSaveCard></PlanSaveCard>
          </div>
         
        </div>
      </div>
    </div>
  );
};
export default MyPlanPage;
