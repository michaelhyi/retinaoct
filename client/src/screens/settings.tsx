import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext, useEffect, useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ActivityIndicator, Switch } from "react-native-paper";
import Layout from "../components/Layout";
import {
  useClearAllPatientsMutation,
  useClearAllScansMutation,
  useDeleteUserMutation,
  useGetAiQuery,
  useSetAiMutation,
} from "../generated/graphql";
import { context } from "../utils/context";

const Settings = () => {
  const { user, setUser } = useContext(context);
  const [{ data, fetching }] = useGetAiQuery({
    variables: {
      id: user,
    },
  });
  const [ai, setAi] = useState(data?.getAi);
  const [, clearAllPatients] = useClearAllPatientsMutation();
  const [, clearAllScans] = useClearAllScansMutation();
  const [, deleteUser] = useDeleteUserMutation();
  const [, useSetAi] = useSetAiMutation();

  useEffect(() => {
    setAi(data?.getAi);
  }, [fetching, data]);

  if (fetching) {
    return (
      <Layout>
        <ActivityIndicator
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </Layout>
    );
  }

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
            onValueChange={async () => {
              await useSetAi({ id: user, ai: !ai });
              setAi(!ai);
            }}
          />
        </View>
      </View>
      <View style={styles.container}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.text}>Clear All Patients</Text>
          <TouchableOpacity
            style={styles.clearBtn}
            onPress={async () => {
              Alert.alert(
                "Delete All Patients",
                "Are you sure that you want to delete all patients? This action CANNOT be undone.",
                [
                  {
                    text: "Confirm",
                    onPress: async () => {
                      await clearAllPatients({ id: user });
                      Alert.alert(
                        "Success!",
                        "Succesfully deleted all patients!"
                      );
                    },
                  },
                  {
                    text: "Cancel",
                    style: "cancel",
                  },
                ]
              );
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
              Alert.alert(
                "Delete All Scans",
                "Are you sure that you want to delete all scans? This action CANNOT be undone.",
                [
                  {
                    text: "Confirm",
                    onPress: async () => {
                      await clearAllScans({ id: user });
                      Alert.alert(
                        "Success!",
                        "Succesfully deleted all patients!"
                      );
                    },
                  },
                  {
                    text: "Cancel",
                    style: "cancel",
                  },
                ]
              );
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
              Alert.alert(
                "Delete All Data",
                "Are you sure that you want to delete all data? This action CANNOT be undone.",
                [
                  {
                    text: "Confirm",
                    onPress: async () => {
                      await clearAllScans({ id: user });
                      await clearAllPatients({ id: user });
                      Alert.alert("Success!", "Succesfully deleted all data!");
                    },
                  },
                  {
                    text: "Cancel",
                    style: "cancel",
                  },
                ]
              );
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
              Alert.alert(
                "Delete Account",
                "Are you sure that you want to delete this account? This action CANNOT be undone.",
                [
                  {
                    text: "Confirm",
                    onPress: async () => {
                      await deleteUser({ id: user });
                      await AsyncStorage.removeItem("user");
                      setUser(null);
                    },
                  },
                  {
                    text: "Cancel",
                    style: "cancel",
                  },
                ]
              );
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
