import React from "react";
import { useAppContext } from "../../AppContext";
import { Link } from "react-router-dom";

export default function User() {
    const { user } = useAppContext();

    if (!user?.name) {
        return null;
    }

    return (
        <Link to="/user">
            <span className="material-icons">account_circle</span>
        </Link>
    );
}
