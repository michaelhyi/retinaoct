import { useContext, useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Layout from "../components/Layout";
import { useLoginMutation } from "../generated/graphql";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { context } from "../utils/context";

const Landing = () => {
  const { setUser } = useContext(context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, login] = useLoginMutation();

  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.icon} />
        <Text style={styles.logoText}>RetinaOCT</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.textInput}
            placeholder="email"
            value={email}
            onChangeText={setEmail}
            placeholderTextColor="black"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.textInput}
            placeholder="password"
            value={password}
            onChangeText={setPassword}
            placeholderTextColor="black"
            autoCapitalize="none"
            secureTextEntry
          />
        </View>
        <TouchableOpacity
          onPress={async () => {
            const response = await login({ email, password });
            if (!response.data?.login.error) {
              await AsyncStorage.setItem(
                "user",
                JSON.stringify(response.data!.login.user!.id)
              );
              setUser(response.data!.login.user!.id);
            }
          }}
          style={styles.button}
        >
          <Text style={{ fontFamily: "Montserrat-Medium", fontSize: 18 }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: Dimensions.get("window").height / 12,
  },

  icon: {
    backgroundColor: "white",
    padding: 35,
    borderRadius: 12,
    marginBottom: 16,
  },

  logoText: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 36,
  },

  form: {
    marginTop: 24,
  },

  textInput: {
    backgroundColor: "#e5e5e5",
    padding: 24,
    borderRadius: 12,
    width: (Dimensions.get("window").width * 13) / 15,
    marginTop: 16,
  },

  button: {
    marginTop: 48,
    backgroundColor: "#B6DCFE",
    padding: 25,
    borderRadius: 36,
    width: (Dimensions.get("window").width * 13) / 15,
    alignItems: "center",
  },
});

export default Landing;
