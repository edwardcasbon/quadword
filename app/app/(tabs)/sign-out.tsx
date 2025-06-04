import { useRouter } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";
import Loading from "@/components/Loading";
import Styles from "@/styles/Styles";
import { setCurrentUser } from "@/utilities/User";

export default function Tab() {
    const router = useRouter();

    // Sign the user out (aka set the current user to null), then redirect to
    // the account page where it'll likely redirect back to the sign in page.
    useEffect(() => {
        (async () => {
            await setCurrentUser(null);
            router.replace("/account");
        })();
    }, [router]);

    return (
        <View style={Styles.container}>
            <Loading />
        </View>
    );
}
