import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Alert,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useGetPatientIdByMrnMutation } from "../generated/graphql";
import BackButton from "../components/BackButton";
import Layout from "../components/Layout";
import { Navigation } from "../utils/types";

interface Props {
  navigation: Navigation;
}

const ViewPatientFile: React.FC<Props> = ({ navigation }) => {
  const [mrn, setMrn] = useState("");
  const [, getPatientIdByMrn] = useGetPatientIdByMrnMutation();

  return (
    <Layout>
      <BackButton navigation={navigation} />
      <View style={styles.container}>
        <View style={styles.icon} />
        <Text style={styles.logoText}>RetinaOCT</Text>
        <View style={styles.textInput}>
          <Ionicons name="person" size={25} color="#999999" />
          <TextInput
            style={{
              flex: 1,
              color: "#999999",
              fontSize: 16,
              marginLeft: 15,
              fontFamily: "Montserrat-Regular",
            }}
            placeholder="Enter Patient MRN"
            value={mrn}
            onChangeText={setMrn}
            placeholderTextColor="#999999"
            autoCapitalize="none"
          />
        </View>
        <TouchableOpacity
          onPress={async () => {
            const response = await getPatientIdByMrn({ mrn });
            if (response.data?.getPatientIdByMrn) {
              navigation.navigate("View Patient", {
                patientId: response.data.getPatientIdByMrn,
              });
            } else {
              Alert.alert("Error!", "Invalid MRN!");
            }
          }}
          style={styles.button}
        >
          <Text style={{ fontFamily: "Montserrat-Medium", fontSize: 18 }}>
            View Patient File
          </Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: -1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
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
    marginBottom: 24,
  },

  textInput: {
    flexDirection: "row",
    alignItems: "center",
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

export default ViewPatientFile;
