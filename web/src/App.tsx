import "./app.scss";

import React from "react";
import { AppContextProvider } from "./AppContext";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from "./routes";

const router = createBrowserRouter(routes);

function App(): JSX.Element {
    return (
        <AppContextProvider>
            <RouterProvider router={router} />
        </AppContextProvider>
    );
}

export default App;