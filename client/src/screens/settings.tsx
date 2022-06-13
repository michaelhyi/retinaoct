import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Layout from "../components/Layout";
import { context } from "../utils/context";

const Settings = () => {
  const { setUser } = useContext(context);
  return (
    <Layout>
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
    </Layout>
  );
};

export default Settings;
