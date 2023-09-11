import React, { useEffect } from "react";
import { useAppContext } from "../AppContext";
import { useNavigate } from "react-router-dom";
export default function RootView() {
    const { user } = useAppContext();
    const navigate = useNavigate();

    useEffect(() => {
        user?.name ? navigate("/game") : navigate("/start");
    }, [user]);

    return <></>;
}
