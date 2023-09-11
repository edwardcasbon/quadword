import React, { createContext, useContext, useState } from "react";
import { IUser } from "./types/user";

const AppContext = createContext<{
    user: IUser;
}>({
    user: null,
});

const AppContextProvider = ({ children }: { children: JSX.Element }) => {
    const sharedState: {
        user: IUser;
    } = {
        user: null,
    };

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
