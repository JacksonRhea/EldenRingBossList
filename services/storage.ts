import AsyncStorage from "@react-native-async-storage/async-storage"
import { Boss } from "../models/Bosses";

export const SaveData = async (key: string, value: Record<string, Boss>) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error)
    }
}

export const LoadData = async <T>(key: string): Promise<T | null> => {
  try {
    const data = await AsyncStorage.getItem(key);
    return data != null ? JSON.parse(data) : null;
  } catch (error) {
    console.log(error)
    return null;
  }
}