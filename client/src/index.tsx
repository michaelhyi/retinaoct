import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { createClient, Provider } from "urql";
import { IP_ADDRESS } from "../constants";
import TabNavigator from "./components/TabNavigator";
import Landing from "./screens/landing";
import { context } from "./utils/context";
import { loadFonts } from "./utils/loadFonts";

const client = createClient({
  url: `http://${IP_ADDRESS}:4000/graphql`,
});

const App = () => {
  let [fontsLoaded] = loadFonts();
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const user = await AsyncStorage.getItem("user");
      if (user) {
        setUser(JSON.parse(user));
      }
    })();
  }, []);

  if (!fontsLoaded) {
    return (
      <ActivityIndicator
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      />
    );
  }

  return (
    <context.Provider value={{ user, setUser }}>
      <Provider value={client}>
        <NavigationContainer>
          <StatusBar style="dark" />
          {user ? <TabNavigator /> : <Landing />}
        </NavigationContainer>
      </Provider>
    </context.Provider>
  );
};

export default App;
