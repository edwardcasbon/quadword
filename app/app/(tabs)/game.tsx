import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Loading from "@/components/Loading";
import Styles from "@/styles/Styles";
import { IUser } from "@/types/User";
import { getCurrentUser } from "@/utilities/User";

export default function Tab() {
    const router = useRouter();
    const [isLoadingUser, setIsLoadingUser] = useState(true);
    const [user, setUser] = useState<IUser | null>(null);

    useEffect(() => {
        (async () => {
            const user = await getCurrentUser();
            if (!user) {
                router.replace("/sign-in");
            }
            setUser(user);
            setIsLoadingUser(false);
        })();
    });
    return (
        <View style={Styles.container}>
            {isLoadingUser ? <Loading /> : <Text>Game</Text>}
        </View>
    );
}
