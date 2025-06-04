import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import Loading from "@/components/Loading";
import Styles from "@/styles/Styles";
import { IUser } from "@/types/User";
import { getCurrentUser, setCurrentUser } from "@/utilities/User";

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
            <Text>Account</Text>
            {isLoadingUser ? (
                <Loading />
            ) : (
                <>
                    <Text>{user?.name}</Text>
                    <Button
                        title={`Not ${user?.name}? Sign out`}
                        onPress={async () => {
                            await setCurrentUser(null);
                            router.reload();
                        }}
                    />
                </>
            )}
        </View>
    );
}
