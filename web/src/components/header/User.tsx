import React from "react";
import { useAppContext } from "../../AppContext";
import { Link, useLocation } from "react-router-dom";

export default function User() {
    const { user } = useAppContext();
    const { pathname } = useLocation();

    if (!user?.name) {
        return null;
    }

    return (
        <Link to="/user" className={pathname === "/user" ? "active" : ""}>
            <span className="material-symbols-outlined">account_circle</span>
        </Link>
    );
}
