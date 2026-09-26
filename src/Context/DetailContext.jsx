"use client"
import React, { createContext, useState } from 'react';


export const PlanContexts = createContext({})
const ContextProvider = ({children}) => {
const [addPlan,setAddPlan]=useState([])
const [savedBotton,setSavedBotton]=useState([])
const [sortBy,setSortBy]=useState([])


const sharedData={
addPlan,setAddPlan,savedBotton,setSavedBotton,sortBy,setSortBy
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