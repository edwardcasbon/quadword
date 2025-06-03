import { Link, Tabs } from "expo-router";
import Header from "@/components/Header";
import FontAwesome from "@expo/vector-icons/FontAwesome";

type ITab = {
    name: string;
    title: string;
    icon: keyof typeof FontAwesome.glyphMap;
    visible: boolean;
    order: number;
};

export default function TabLayout() {
    const tabs: ITab[] = (
        [
            {
                name: "index",
                title: "Index",
                icon: "home",
                visible: false,
                order: 0,
            },
            {
                name: "about",
                title: "About",
                icon: "home",
                visible: true,
                order: 3,
            },
            {
                name: "account",
                title: "Account",
                icon: "home",
                visible: false,
                order: 0,
            },
            {
                name: "game",
                title: "Game",
                icon: "home",
                visible: true,
                order: 1,
            },
            {
                name: "leaderboard",
                title: "Scores",
                icon: "home",
                visible: true,
                order: 2,
            },
            {
                name: "sign-in",
                title: "Sign in",
                icon: "home",
                visible: false,
                order: 0,
            },
            {
                name: "sign-out",
                title: "Sign out",
                icon: "home",
                visible: false,
                order: 0,
            },
        ] as ITab[]
    ).sort((a, b) => a.order - b.order);

    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: "blue",
                    headerTitle: "",
                    headerLeft: () => <Header />,
                    headerRight: () => {
                        const accountTab = tabs.find(
                            (t) => t.name === "account"
                        );
                        return accountTab ? (
                            <Link href={`/${accountTab.name}`}>
                                <FontAwesome size={28} name={accountTab.icon} />
                            </Link>
                        ) : null;
                    },
                }}
            >
                {tabs.map((tab) => (
                    <Tabs.Screen
                        key={tab.name}
                        name={tab.name}
                        options={{
                            title: tab.title,
                            href: tab.visible ? `./${tab.name}` : null,

                            // headerLeft: () => <Header />,
                            tabBarIcon: ({ color }) => (
                                <FontAwesome
                                    size={28}
                                    name={tab.icon}
                                    color={color}
                                />
                            ),
                        }}
                    />
                ))}
            </Tabs>
        </>
    );
}
