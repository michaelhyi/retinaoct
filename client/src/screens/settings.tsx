import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Switch } from "react-native-paper";
import Layout from "../components/Layout";
import { context } from "../utils/context";
import { AntDesign } from "@expo/vector-icons";

const Settings = () => {
  const { setUser } = useContext(context);
  const [ai, setAi] = useState(false);

  return (
    <Layout>
      <View>
        <Text
          style={{
            fontFamily: "Montserrat-SemiBold",
            fontSize: 36,
            position: "absolute",
            zIndex: -1,
            left: 0,
            right: 0,
            textAlign: "center",
          }}
        >
          Settings
        </Text>
      </View>
      <View
        style={{
          ...styles.container,
          marginTop: 64,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.text}>Enable AI-Powered Diagnosis</Text>
          <Switch
            style={{ marginLeft: "auto" }}
            color="#B6DCFE"
            value={ai}
            onValueChange={setAi}
          />
        </View>
      </View>
      <View style={styles.container}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.text}>Clear All Patients</Text>
          <TouchableOpacity
            style={styles.clearBtn}
            onPress={async () => {
              await AsyncStorage.removeItem("user");
              setUser(null);
            }}
          >
            <Text style={{ fontFamily: "Montserrat-Regular", color: "white" }}>
              Clear
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{ marginTop: 12, flexDirection: "row", alignItems: "center" }}
        >
          <Text style={styles.text}>Clear All Scans</Text>
          <TouchableOpacity
            style={styles.clearBtn}
            onPress={async () => {
              await AsyncStorage.removeItem("user");
              setUser(null);
            }}
          >
            <Text style={{ fontFamily: "Montserrat-Regular", color: "white" }}>
              Clear
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{ marginTop: 12, flexDirection: "row", alignItems: "center" }}
        >
          <Text style={styles.text}>Clear All Data</Text>
          <TouchableOpacity
            style={styles.clearBtn}
            onPress={async () => {
              await AsyncStorage.removeItem("user");
              setUser(null);
            }}
          >
            <Text style={{ fontFamily: "Montserrat-Regular", color: "white" }}>
              Clear
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.text}>Edit Profile</Text>
          <TouchableOpacity style={{ marginLeft: "auto" }}>
            <AntDesign name="right" size={20} color="#B6DCFE" />
          </TouchableOpacity>
        </View>
        <View
          style={{ marginTop: 12, flexDirection: "row", alignItems: "center" }}
        >
          <Text style={styles.text}>Logout</Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={async () => {
              await AsyncStorage.removeItem("user");
              setUser(null);
            }}
          >
            <Text style={{ fontFamily: "Montserrat-Regular", color: "white" }}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.text}>Delete Account</Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={async () => {
              await AsyncStorage.removeItem("user");
              setUser(null);
            }}
          >
            <Text style={{ fontFamily: "Montserrat-Regular", color: "white" }}>
              Delete
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    backgroundColor: "white",
    padding: 25,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  text: {
    fontFamily: "Montserrat-Medium",
    fontSize: 16,
    color: "#0075FF",
  },
  btn: {
    backgroundColor: "#FF7575",
    marginLeft: "auto",
    padding: 12,
    borderRadius: 24,
  },
  clearBtn: {
    backgroundColor: "#B6DCFE",
    marginLeft: "auto",
    padding: 12,
    borderRadius: 24,
  },
});

export default Settings;
