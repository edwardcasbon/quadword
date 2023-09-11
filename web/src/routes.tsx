import React from "react";
import { RouteObject } from "react-router-dom";
import Layout from "./components/Layout";
import RootView from "./views/Root";
import StartView from "./views/Start";

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <RootView />,
            },
            {
                path: "start",
                element: <StartView />,
            },
            {
                path: "game",
                element: <p>Game</p>,
            },
            {
                path: "user",
                element: <p>User</p>,
            },
            {
                path: "leaderboard",
                element: <p>Leaderboard</p>,
            },
            {
                path: "more",
                element: <p>More</p>,
            },
            {
                path: "about",
                element: <p>About</p>,
            },
        ],
    },
];
