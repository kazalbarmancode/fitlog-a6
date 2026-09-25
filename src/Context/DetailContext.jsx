"use client"
import React, { createContext, useState } from 'react';


export const DetailsContexts = createContext({})
const ContextProvider = ({children}) => {
const [details,setDetails]=useState([])
const sharedData={
    details,setDetails
}
    return (
        <div>
            <DetailsContexts.Provider value={sharedData }>
            {children}

            </DetailsContexts.Provider>
        </div>
    );
};

export default ContextProvider;