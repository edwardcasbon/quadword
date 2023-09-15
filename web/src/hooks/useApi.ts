import React, { useEffect } from "react";
import { fetchApi } from "../fetches/api";

export const useApi = (
    uri: string,
    callback: (json: any) => void,
    dependencies: any[] = [],
    method: string = "GET",
    data: any = null
) => {
    if (!Array.isArray(dependencies)) {
        dependencies = [];
    }

    useEffect(() => {
        const controller = new AbortController();

        fetchApi(uri, callback, method, data, controller);

        return () => {
            controller.abort();
        };
    }, dependencies);
};
