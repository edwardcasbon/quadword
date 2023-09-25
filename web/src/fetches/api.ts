import React from "react";

const apiUrl = "http://localhost:4000/api";

export const fetchApi = (
    uri: string,
    callback?: (json: any) => void,
    method: string = "GET",
    data: any = null,
    controller?: AbortController
) => {
    controller = controller ?? new AbortController();
    const signal = controller.signal;

    const fetchOptions: {
        signal: AbortSignal;
        method: string;
        headers: {};
        body?: any;
    } = {
        signal,
        method,
        headers: {
            "Content-Type": "application/json",
        },
    };

    if ((method === "POST" || method === "PUT") && data !== null) {
        fetchOptions.body = JSON.stringify(data);
    }

    return fetch(`${apiUrl}${uri}`, fetchOptions)
        .then((response) => response.json())
        .then((json) => {
            if (typeof callback === "function") {
                callback.call(this, json);
            }
            return json;
        })
        .catch((err) => console.error(err));
};
