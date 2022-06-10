import { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Screen from "../components/screen";
import { context } from "../utils/context";

const Settings = (): JSX.Element => {
  const { setUser } = useContext(context);
  return (
    <Screen>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          onPress={async () => {
            await AsyncStorage.removeItem("user");
            setUser(null);
          }}
          style={{
            backgroundColor: "lightblue",
            padding: 25,
            width: 250,
            alignItems: "center",
            borderRadius: 12,
          }}
        >
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
};

export default Settings;
