import React from "react";
import { RouteObject } from "react-router-dom";
import Layout from "./components/Layout";
import RootView from "./views/Root";
import StartView from "./views/Start";
import UserView from "./views/User";
import LeaderboardView from "./views/Leaderboard";
import AboutView from "./views/About";

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
                element: <UserView />,
            },
            {
                path: "leaderboard",
                element: <LeaderboardView />,
            },
            {
                path: "about",
                element: <AboutView />,
            },
        ],
    },
];
