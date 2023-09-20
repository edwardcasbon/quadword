import React, { useEffect } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { useAppContext } from "../AppContext";
import UpdateEmail from "../components/game-over/UpdateEmail";

export default function GameOverView() {
    const [searchParams] = useSearchParams();
    const { user } = useAppContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/");
        }
    }, [user]);

    return (
        <section className="game-over">
            <h1>Game over</h1>
            {searchParams.get("points") && (
                <p className="game-over__score">
                    You scored {searchParams.get("points")} points
                </p>
            )}
            <Link to="/" className="button">
                Play again
            </Link>
            {!user?.email && <UpdateEmail />}
        </section>
    );
}
