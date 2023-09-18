import React from "react";
import { useSearchParams } from "react-router-dom";
import { useAppContext } from "../AppContext";
import UpdateEmail from "../components/game-over/UpdateEmail";

export default function GameOverView() {
    const [searchParams] = useSearchParams();
    const { user } = useAppContext();

    return (
        <>
            <h1>Game over</h1>
            {searchParams.get("points") && (
                <p>You scored {searchParams.get("points")} points</p>
            )}
            {!user.email && <UpdateEmail />}
        </>
    );
}
