import { LogBox } from "react-native";
import { useFonts } from "expo-font";

LogBox.ignoreLogs(["Overwriting fontFamily style attribute preprocessor"]);

export const loadFonts = () => {
  return useFonts({
    "Montserrat-Regular": require("../assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Medium": require("../assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-SemiBold": require("../assets/fonts/Montserrat-SemiBold.ttf"),
  });
};
