import "./app.scss";

import React from "react";
import { AppContextProvider } from "./AppContext";

function App(): JSX.Element {
    return (
        <AppContextProvider>
            <React.Fragment></React.Fragment>
        </AppContextProvider>
    );
}

export default App;
