import React from "react";
import WorkOutCard from "./AllCard/WorkOutCard";

const getLaibraryData = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  if (!res.ok) throw new Error("Failed to fetch data");
  const data = await res.json();
  return data;
};
const WorkOut = async () => {
  const laibrarys = await getLaibraryData();
  return (
    <div className="container px-10">
      <div className="py-8">
        <h1 className="text-white font-bold text-3xl mb-2">THE LIBRARY</h1>
        <p className="text-[#9CA3AF]">Twelve lifts covering every major muscle group.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
        {laibrarys.map((library) => (
          <WorkOutCard key={library.id}
          library={library}>  
          </WorkOutCard>
       
        ))}
      </div>
    </div>
  );
};

export default WorkOut;
