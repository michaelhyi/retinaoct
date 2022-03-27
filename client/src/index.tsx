import { FC } from "react";
import { ActivityIndicator } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import { loadFonts } from "./functions/loadFonts";
import Tabs from "./components/tabs";

const App: FC = (): JSX.Element => {
  let [fontsLoaded] = loadFonts();

  if (!fontsLoaded) {
    return (
      <ActivityIndicator
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      />
    );
  }

  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Tabs />
    </NavigationContainer>
  );
};

export default App;
