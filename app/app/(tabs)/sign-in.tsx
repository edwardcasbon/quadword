import { useRouter } from "expo-router";
import { useState } from "react";
import {
    Button,
    KeyboardAvoidingView,
    Text,
    TextInput,
    View,
} from "react-native";
import Styles from "@/styles/Styles";
import { setCurrentUser } from "@/utilities/User";

export default function Tab() {
    const router = useRouter();
    const [name, setName] = useState("");

    return (
        <View style={Styles.container}>
            <KeyboardAvoidingView
                behavior="padding"
                style={Styles.innerContainer}
            >
                <Text>Name</Text>
                <TextInput
                    inputMode="text"
                    onChangeText={(text) => {
                        setName(text);
                    }}
                    style={{
                        height: 40,
                        borderWidth: 1,
                        padding: 10,
                    }}
                />
                <Button
                    title="Sign in"
                    onPress={async () => {
                        if (name !== "") {
                            await setCurrentUser({ name });
                            router.push("/game");
                        }
                    }}
                />
            </KeyboardAvoidingView>
        </View>
    );
}
