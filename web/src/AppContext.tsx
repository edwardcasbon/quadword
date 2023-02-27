import React, { createContext, useContext, useState } from "react";

const AppContext = createContext({});

const AppContextProvider = ({ children }: { children: JSX.Element }) => {
    const sharedState = {};

    return (
        <AppContext.Provider value={sharedState}>
            {children}
        </AppContext.Provider>
    );
};

const useAppContext = () => {
    return useContext(AppContext);
};

export { AppContextProvider, useAppContext };
