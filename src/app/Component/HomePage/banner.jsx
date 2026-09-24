import Image from "next/image";
import React from "react";
import BannerImage from "@/assets/banner.png";

const Banner = () => {
  return (
    <header className="px-10 lg:px-15 py-6">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center bg-[#222630] rounded-2xl p-6 md:p-12 gap-8 border border-gray-800">
        <div className="flex-1 space-y-4 text-center md:text-left">
          <p className="text-[#C2F800] text-xs font-semibold tracking-wider uppercase">
            WORKOUT LIBRARY
          </p>

          <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight">
            TRAIN WITH INTENT LOG. <br className="hidden sm:inline" />
            EVERY SET.
          </h1>

          <p className="text-[#9CA3AF] text-sm md:text-base max-w-xl">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into todays plan, and watch the weeks work add up.
          </p>

          <div className="pt-2">
            <button className="bg-[#C2F800] hover:bg-[#aee000] text-[#0C0D10] font-bold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md">
              BROWSE WORKOUTS
            </button>
          </div>
        </div>

        <div className="">
          <Image
            src={BannerImage}
            height={334}
            width={334}
            alt="Banner Image"
            priority
            className="w-64 h-64 md:w-83 md:h-83 object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </header>
  );
};

export default Banner;
