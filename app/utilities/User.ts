import { IUser } from "@/types/User";
import AsyncStorage from "@react-native-async-storage/async-storage";

const userKey = "user";

export const getCurrentUser = async (): Promise<IUser | null> => {
    try {
        const user = await AsyncStorage.getItem(userKey);
        return user !== null ? JSON.parse(user) : null;
    } catch (e) {
        console.error("Error getting current user.", { e });
        return null;
    }
};

export const setCurrentUser = async (user: IUser|null): Promise<boolean> => {
    try {
        if (user) {
            await AsyncStorage.setItem(userKey, JSON.stringify(user));
        } else {
            await AsyncStorage.removeItem(userKey);
        }
        return true;
    } catch (e) {
        console.error("Error setting current user.", { e, user });
        return false;
    }
};
