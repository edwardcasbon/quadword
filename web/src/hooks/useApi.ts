import React, { useEffect } from "react";

const apiUrl = "http://localhost:3000";

export const useApi = (
    uri: string,
    callback: (json: any) => void,
    dependencies: [] = [],
    method: string = "GET",
    data: any = null
) => {
    if (!Array.isArray(dependencies)) {
        dependencies = [];
    }

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        const fetchOptions: {
            signal: AbortSignal;
            method: string;
            body?: any;
        } = {
            signal,
            method,
        };

        if ((method === "POST" || method === "PUT") && data !== null) {
            fetchOptions.body = JSON.stringify(data);
        }

        fetch(`${apiUrl}${uri}`, fetchOptions)
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
