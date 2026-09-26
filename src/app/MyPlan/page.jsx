"use client";

import React, { useContext, useMemo, useState } from "react";
import { PlanContexts } from "@/Context/DetailContext";
import Link from "next/link";
import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { Bounce, toast } from "react-toastify";
import SortByMenu from "../Component/SortByMenu/SortByMenu";
import { FaCheck, FaFire } from "react-icons/fa";
import { IoClose, IoTime } from "react-icons/io5";

const MyPlanPage = () => {
  const {
    addPlan,
    setAddPlan,
    savedBotton,
    setSavedBotton,
    sortBy,
    setSortBy,
  } = useContext(PlanContexts);
  const [activeTab, setActiveTab] = useState("today");

  const rawList = activeTab === "today" ? addPlan : savedBotton;
  const totalExercises = rawList.length;

  const totalMinutes = rawList.reduce((acc, curr) => {
    return acc + (Number(curr.duration) || 0);
  }, 0);

  const totalCalories = rawList.reduce((acc, curr) => {
    return acc + (Number(curr.caloriesBurned) || 0);
  }, 0);

  const sortedList = useMemo(() => {
    if (!rawList || !Array.isArray(rawList)) return [];
    const currentSort = sortBy?.toLowerCase();

    return [...rawList].sort((a, b) => {
      if (currentSort === "duration") {
        return (Number(b.duration) || 0) - (Number(a.duration) || 0);
      }
      if (currentSort  === "calories") {
        return (
          (Number(b.caloriesBurned) || 0) - (Number(a.caloriesBurned) || 0)
        );
      }
  if (currentSort === "rating") {
      return (Number(b.rating) || 0) - (Number(a.rating) || 0);
    }
      return 0;
    });
  }, [rawList, sortBy]);

  const handleRemove = (item) => {
    const itemId = item.id || item._id;
    const itemName = item.name || "Workout";

    if (activeTab === "today") {
      setAddPlan(
        addPlan.filter((el) => String(el.id || el._id) !== String(itemId))
      );
      toast.error(`"${itemName}" removed from Today's Plan`, {
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
    } else {
      setSavedBotton(
        savedBotton.filter((el) => String(el.id || el._id) !== String(itemId))
      );
      toast.error(`"${itemName}" removed from Saved`, {
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
    }
  };
 const handleMarkAsDone = (item) => {
    const itemName = item.name || "Workout";
    toast.success(`"${itemName}" marked as completed!`);
  };
  return (
    <div className="min-h-screen bg-[#121212] text-white p-6 md:p-12 font-sans flex flex-col justify-between">
      <div className="max-w-5xl mx-auto w-full space-y-8">
        <div className="space-y-1">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-wider uppercase text-white">
            MY PLAN
          </h1>
          <p className="text-xs md:text-sm text-zinc-400">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        <div className="bg-[#18181B] border border-[#27272A] rounded-2xl p-6 grid grid-cols-3 gap-4">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-zinc-500 font-semibold block mb-1">
              Exercises
            </span>
            <span className="text-2xl md:text-4xl font-extrabold text-[#A3E635]">
              {totalExercises}
            </span>
          </div>

          <div>
            <span className="text-[11px] uppercase tracking-wider text-zinc-500 font-semibold block mb-1">
              Minutes
            </span>
            <span className="text-2xl md:text-4xl font-extrabold text-white">
              {totalMinutes}
            </span>
          </div>

          <div>
            <span className="text-[11px] uppercase tracking-wider text-zinc-500 font-semibold block mb-1">
              Calories
            </span>
            <span className="text-2xl md:text-4xl font-extrabold text-white">
              {totalCalories}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between border-b border-[#27272A] pb-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab("today")}
              className={`text-xs font-semibold px-4 py-2 rounded-lg transition-colors ${
                activeTab === "today"
                  ? "bg-[#27272A] text-white"
                  : "text-zinc-500 hover:text-white"
              }`}
            >
              Todays Plan
            </button>

            <button
              onClick={() => setActiveTab("saved")}
              className={`text-xs font-semibold px-4 py-2 rounded-lg transition-colors ${
                activeTab === "saved"
                  ? "bg-[#27272A] text-white"
                  : "text-zinc-500 hover:text-white"
              }`}
            >
              Saved
            </button>
          </div>
          <div>
            <SortByMenu value={sortBy} onChange={setSortBy}></SortByMenu>
          </div>
        </div>

        {sortedList.length === 0 ? (
          <div className="bg-[#18181B]/50 border border-[#27272A] border-dashed rounded-2xl py-20 px-4 text-center flex flex-col items-center justify-center space-y-4">
            <h2 className="text-base md:text-lg font-bold tracking-wider uppercase text-white">
              NOTHING HERE YET
            </h2>
            <p className="text-xs text-zinc-500 max-w-sm">
              Browse the library and add a lift to get today moving.
            </p>
            <Link href={"/"}>
              <button className="btn bg-[#C2F10D] ">Go To Workouts</button>
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {sortedList.map((item) => {
              const itemId = item.id || item._id;
              return (
                <div
                  key={itemId}
                  className="bg-[#18181B] border border-[#27272A] rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-[#27272A]/80 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={item.image || "/placeholder.jpg"}
                      width={20}
                      height={20}
                      alt={item.name}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover bg-zinc-800 shrink-0"
                    />
                    <div className="space-y-1">
                      <h3 className="font-extrabold text-sm sm:text-base tracking-wide text-white uppercase">
                        {item.name}
                      </h3>
                      <p className="text-xs text-zinc-400 font-medium">
                        {item.equipment || "Medicine Ball"}
                      </p>
                      <div className="flex items-center gap-3 text-[11px] text-zinc-400 font-medium pt-1">
                        <span>
                          <IoTime /> {item.duration || 0} min
                        </span>
                        <span>
                          {" "}
                          <FaFire />
                          {item.caloriesBurned || 0} kcal
                        </span>
                        <span>
                          <CiStar /> {item.rating || "4.5"}
                        </span>
                      </div>
                    </div>
                  </div>

                 <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                    <Link
                      href={`/WorkOut/${itemId}`}
                      className="text-xs text-zinc-400 hover:text-white transition-colors px-2 py-1 font-medium"
                    >
                      View Details
                    </Link>

                    <button
                      onClick={() => handleMarkAsDone(item)}
                      className="bg-[#A3E635] hover:bg-[#8ed324] text-black font-extrabold text-xs px-4 py-2.5 rounded-xl flex items-center gap-2 transition-all"
                    >
                      <FaCheck className="text-[10px]" />
                      <span>Mark as Done</span>
                    </button>

                    <button
                      onClick={() => handleRemove(item)}
                      className="text-zinc-500 hover:text-white p-2 rounded-lg transition-colors"
                      title="Remove"
                    >
                      <IoClose className="text-lg" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
export default MyPlanPage;
