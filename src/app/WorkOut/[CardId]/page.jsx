import AddPlan from "@/app/MyPlan/AddPlan";
import SavedBotton from "@/app/MyPlan/SavedBotton";
import Image from "next/image";
import React from "react";

const getLibraryData = async () => {
  try {
    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog`, {
      cache: "no-store",
    });
    if (!res.ok) return [];
    return await res.json();
  } catch (error) {
    return [];
  }
};

const Page = async ({ params }) => {
  const resolvedParams = await params;
  const { CardId } = resolvedParams || {};

  if (!CardId || CardId === "undefined") {
    return (
      <div className="text-center py-20 text-red-500 font-bold text-xl bg-[#121212] min-h-screen">
        Invalid Card ID! Please select a workout from the main page.
      </div>
    );
  }

  const allWorkouts = await getLibraryData();

  const detail = allWorkouts.find((item) => String(item.id) === String(CardId));

  if (!detail) {
    return (
      <div className="text-center py-20 text-red-500 font-bold text-xl bg-[#121212] min-h-screen">
        {" "}
        Not Found!
      </div>
    );
  }

  const {
    name,
    image,
    muscleGroups = [],
    equipment,
    difficulty,
    duration,
    caloriesBurned,
    sets,
    reps,
    rating,
    description,
    instructions = [],
  } = detail;

  const hasValidImage =
    image && typeof image === "string" && image.trim() !== "";

  return (
    <div className="min-h-screen bg-[#121212] text-white flex items-center justify-center p-4 md:p-10 font-sans">
      <div className="max-w-5xl w-full bg-[#18181B] border border-[#27272A] rounded-3xl p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 shadow-2xl">
        <div className="lg:col-span-5 flex items-center justify-center">
          <div className="w-full h-80 lg:h-120 bg-[#27272A] rounded-2xl overflow-hidden relative border border-[#3F3F46]">
            {hasValidImage ? (
              <Image
                src={image}
                width={444}
                height={500}
                alt={name || "Workout"}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-zinc-500 font-medium">
                No Image Available
              </div>
            )}
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          <div className="space-y-2">
            <h1 className="text-2xl md:text-3xl font-extrabold uppercase tracking-wider text-white">
              {name}
            </h1>
            <p className="text-xs md:text-sm text-zinc-400 leading-relaxed max-w-xl">
              {description}
            </p>

            <div className="flex gap-2 pt-2 flex-wrap">
              {muscleGroups.map((group, idx) => (
                <span
                  key={idx}
                  className="bg-[#A3E635] text-black text-[11px] font-extrabold px-3 py-1 rounded-md uppercase tracking-wider"
                >
                  {group}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-[#121215] border border-[#27272A] rounded-xl p-4 space-y-2.5 text-xs">
            <div className="flex justify-between items-center text-zinc-400 border-b border-zinc-800/80 pb-1.5">
              <span>Equipment</span>
              <span className="font-semibold text-white">
                {equipment || "N/A"}
              </span>
            </div>
            <div className="flex justify-between items-center text-zinc-400 border-b border-zinc-800/80 pb-1.5">
              <span>Difficulty</span>
              <span className="font-semibold text-white">
                {difficulty || "N/A"}
              </span>
            </div>
            <div className="flex justify-between items-center text-zinc-400 border-b border-zinc-800/80 pb-1.5">
              <span>Sets</span>
              <span className="font-semibold text-white">{sets || "N/A"}</span>
            </div>
            <div className="flex justify-between items-center text-zinc-400 border-b border-zinc-800/80 pb-1.5">
              <span>Reps</span>
              <span className="font-semibold text-white">{reps || "N/A"}</span>
            </div>
            <div className="flex justify-between items-center text-zinc-400 border-b border-zinc-800/80 pb-1.5">
              <span>Duration</span>
              <span className="font-semibold text-white">
                {duration || "N/A"}
              </span>
            </div>
            <div className="flex justify-between items-center text-zinc-400 border-b border-zinc-800/80 pb-1.5">
              <span>Calories</span>
              <span className="font-semibold text-white">
                {caloriesBurned ? `${caloriesBurned} kcal` : "N/A"}
              </span>
            </div>
            <div className="flex justify-between items-center text-zinc-400">
              <span>Rating</span>
              <span className="font-semibold text-yellow-400">
                {rating || "N/A"}
              </span>
            </div>
          </div>

          {instructions.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                Instructions
              </h3>
              <ol className="list-decimal list-inside space-y-1 text-xs text-zinc-400 leading-relaxed">
                {instructions.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ol>
            </div>
          )}

          <div className="flex items-center gap-3 pt-2">
           
            <AddPlan detail={detail}></AddPlan>
          <SavedBotton detail={detail}></SavedBotton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
