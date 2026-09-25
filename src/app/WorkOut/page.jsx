import React from 'react';
import WorkOutCard from '../Component/AllCard/WorkOutCard';


const getLaibraryData = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  if (!res.ok) throw new Error("Failed to fetch data");
  const data = await res.json();
  return data;
};

const page =async () => {
const workOuts=await getLaibraryData()
    return (
        <div>
       {
        workOuts.map(workOut=><WorkOutCard key={workOut.id} workOut={workOut}></WorkOutCard> )
       }
        </div>
    );
};

export default page;