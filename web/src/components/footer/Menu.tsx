import React from "react";
import { Link } from "react-router-dom";

const items = [
    {
        label: "Play",
        icon: "play",
        route: "/",
    },
    {
        label: "Leaderboard",
        icon: "leaderboard",
        route: "/leaderboard",
    },
    {
        label: "More",
        icon: "more",
        route: "/more",
    },
];

export default function Menu() {
    return (
        <ul>
            {items.map((item) => (
                <li key={item.label.toLowerCase()}>
                    <MenuButton item={item} />
                </li>
            ))}
        </ul>
    );
}

function MenuButton({ item }: { item: any }) {
    return <Link to={item.route}>{item.label}</Link>;
}
