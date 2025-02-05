import {useState, useEffect} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useAsyncStorage = (key, defaultValue = null) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    (async () => {
      const res = await AsyncStorage.getItem(key);
      if (!res) return;
      setValue(JSON.parse(res));
    })()
  }, [])

  const mySetValue = (newValue) => {
    setValue(newValue);
    AsyncStorage.setItem(key, JSON.stringify(newValue));
  }

  return [value, mySetValue];
}

export default useAsyncStorage;