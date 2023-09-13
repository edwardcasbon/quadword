import React, { useEffect, useState } from "react";
import { useApi } from "../hooks/useApi";
import Leaderboard from "../components/leaderboard/Leaderboard";

export default function LeaderboardView() {
    const [leaderboard, setLeaderboard] = useState(null);

    useApi(
        "/leaderboard",
        (json: any) => {
            setLeaderboard(json);
        },
        []
    );

    return (
        <>
            <h1>Leaderboard</h1>
            {leaderboard === null ? (
                <p>Loading...</p>
            ) : (
                <Leaderboard leaders={leaderboard} />
            )}
        </>
    );
}
