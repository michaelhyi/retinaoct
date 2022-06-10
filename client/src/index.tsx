import { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createClient, Provider } from "urql";
import { loadFonts } from "./utils/loadFonts";
import Landing from "./screens/landing";
import { IP_ADDRESS } from "../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Tabs from "./components/tabs";
import { context } from "./utils/context";

const client = createClient({
  url: `http://${IP_ADDRESS}:4000/graphql`,
});

const App = (): JSX.Element => {
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
          {user ? <Tabs /> : <Landing />}
        </NavigationContainer>
      </Provider>
    </context.Provider>
  );
};

export default App;
