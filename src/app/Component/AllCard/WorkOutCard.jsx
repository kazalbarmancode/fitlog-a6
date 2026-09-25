import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegStar } from "react-icons/fa";
import { IoTimeSharp } from "react-icons/io5";
import { LuFlame } from "react-icons/lu";

const WorkOutCard = ({ library={} }) => {
  const {
    image,
    rating,
    name,
    muscleGroups = [],
    duration,
    caloriesBurned,
  } = library;
 
  return (
    <Link href={`/WorkOut/${library.id}`}>
   
    <div  className="bg-[#14161C] border border-[#272A34] rounded-2xl overflow-hidden hover:border-lime-400/50 transition-all duration-300 flex flex-col">
      <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-zinc-800">
        <Image src={image} alt={name} width={444}height={444} className="object-cover" />
      </div>

      <div className="p-4 flex flex-col grow justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {muscleGroups?.map((muscleGroup, idx) => (
            <span
              key={idx}
              className="bg-lime-400 text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-md uppercase"
            >
              {muscleGroup}
            </span>
          ))}
        </div>

        <h3 className="text-white font-bold text-base sm:text-lg tracking-wide uppercase line-clamp-1">
          {name}
        </h3>

        <div className="flex items-center gap-4 text-[#9CA3AF] text-xs pt-1 border-t border-[#272A34]/50">
          <div className="flex items-center gap-1">
            <span className="text-white">
              <IoTimeSharp />
            </span>
            <span>{duration}</span>
          </div>

          <div className="flex items-center gap-1">
            <span><LuFlame className="text-orange-500 text-sm" /></span>
            <span>{caloriesBurned}</span>
          </div>

          <div className="flex items-center gap-1">
            <span className="text-yellow-400">
              <FaRegStar />
            </span>
            <span>{rating}</span>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default WorkOutCard;
