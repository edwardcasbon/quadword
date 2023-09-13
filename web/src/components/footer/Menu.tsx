import React from "react";
import { Link } from "react-router-dom";
import { IMenuButton } from "../../types/footer/menu";

const items: IMenuButton[] = [
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
        label: "About",
        icon: "about",
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
    return <Link to={item.route}>{item.label}</Link>;
}
