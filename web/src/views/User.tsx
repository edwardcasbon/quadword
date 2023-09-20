import React, { useEffect } from "react";
import { useAppContext } from "../AppContext";
import { Link, useNavigate } from "react-router-dom";

export default function UserView() {
    const navigate = useNavigate();
    const { user, setUser } = useAppContext();

    useEffect(() => {
        if (!user?.name) {
            navigate("/");
        }
    }, [user]);

    function signOut() {
        setUser(null);
    }

    return (
        <section className="user">
            <h1>
                You're playing as "<strong>{user?.name}</strong>"
            </h1>
            <p>
                Not you?{" "}
                <Link to={"/"} onClick={signOut}>
                    Sign out and start again
                </Link>
            </p>
        </section>
    );
}
