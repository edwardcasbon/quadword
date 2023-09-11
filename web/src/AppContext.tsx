import React, { createContext, useContext } from "react";
import { IUser } from "./types/user";
import { useLocalStorage } from "./hooks/useLocalStorage";

type IAppContext = {
    user: IUser;
    setUser: React.Dispatch<IUser>;
};

const AppContext = createContext<IAppContext>({
    user: null,
    setUser: (user: IUser) => {},
});

const AppContextProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useLocalStorage("quadword.user");

    const sharedState: IAppContext = {
        user,
        setUser,
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
