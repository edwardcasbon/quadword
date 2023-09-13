import React, { useEffect } from "react";

const apiUrl = "http://localhost:3000";

export const useApi = (
    uri: string,
    callback: (json: any) => void,
    dependencies: [] = []
) => {
    if (!Array.isArray(dependencies)) {
        dependencies = [];
    }

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        fetch(`${apiUrl}${uri}`, { signal })
            .then((response) => response.json())
            .then((json) => {
                if (typeof callback === "function") {
                    callback.call(this, json);
                }
            })
            .catch((err) => console.error(err));

        return () => {
            controller.abort();
        };
    }, dependencies);
};
