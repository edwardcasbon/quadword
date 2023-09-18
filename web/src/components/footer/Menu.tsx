import React from "react";
import { Link } from "react-router-dom";
import { IMenuButton } from "../../types/footer/menu";

const items: IMenuButton[] = [
    {
        label: "Play",
        icon: "sports_esports",
        route: "/",
    },
    {
        label: "Leaderboard",
        icon: "social_leaderboard",
        route: "/leaderboard",
    },
    {
        label: "About",
        icon: "info",
        route: "/about",
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

function MenuButton({ item }: { item: IMenuButton }) {
    return (
        <Link to={item.route}>
            <span className="material-symbols-outlined">{item.icon}</span>
            {item.label}
        </Link>
    );
}
