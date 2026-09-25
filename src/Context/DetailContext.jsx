"use client"
import React, { createContext, useState } from 'react';


export const PlanContexts = createContext({})
const ContextProvider = ({children}) => {
const [addPlan,setAddPlan]=useState([])
const [savedBotton,setSavedBotton]=useState([])

const sharedData={
addPlan,setAddPlan,savedBotton,setSavedBotton
}
    return (
        <div>
           <PlanContexts.Provider value={sharedData} >
            
             {children}
             
             </PlanContexts.Provider>
        </div>
    );
};

export default ContextProvider;