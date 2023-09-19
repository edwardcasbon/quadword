import React from "react";
import { Link, useLocation } from "react-router-dom";
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

function isItemActive(item: IMenuButton, pathname: string) {
    if (item.route === "/" && ["/game", "/start"].find((p) => p === pathname)) {
        return true;
    }

    return item.route === pathname;
}

export default function Menu() {
    const { pathname } = useLocation();

    return (
        <ul>
            {items.map((item) => (
                <li key={item.label.toLowerCase()}>
                    <MenuButton
                        item={item}
                        active={isItemActive(item, pathname)}
                    />
                </li>
            ))}
        </ul>
    );
}

function MenuButton({ item, active }: { item: IMenuButton; active: boolean }) {
    return (
        <Link to={item.route} className={active ? "active" : ""}>
            <span className="material-symbols-outlined">{item.icon}</span>
            {item.label}
        </Link>
    );
}
