import React from "react";
import { RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [{
    path: "/",
    element: <p>Root</p>
}, {
    path: "start",
    element: <p>Start</p>
}, {
    path: "game",
    element: <p>Game</p>
}, {
    path: "user",
    element: <p>User</p>
}, {
    path: "leaderboard",
    element: <p>Leaderboard</p>
}, {
    path: "more",
    element: <p>More</p>
}, {
    path: "about",
    element: <p>About</p>
}];