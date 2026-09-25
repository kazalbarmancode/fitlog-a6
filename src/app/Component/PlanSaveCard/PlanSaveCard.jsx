import Image from 'next/image';
import React from 'react';

const PlanSaveCard = () => {

    return (
        <div>
            <div className="flex items-center gap-4">
                    <Image
                      src={item.image || "/placeholder.jpg"}
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
                        <span>⏱ {item.duration || 0} min</span>
                        <span>🔥 {item.caloriesBurned || 0} kcal</span>
                        <span>⭐ {item.rating || "4.5"}</span>
                      </div>
                    </div>
                  </div>

            
        </div>
    );
};

export default PlanSaveCard;