import React, { useState, useEffect } from "react";

export const useLocalStorage = (
    key: string = ""
): [value: any, setValue: React.Dispatch<any>] => {
    const [value, setValue] = useState(
        JSON.parse(localStorage.getItem(key)) ?? null
    );

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [JSON.stringify(value), key]);

    return [value, setValue];
};
