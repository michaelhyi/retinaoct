import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";
import React, { useContext, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useCreatePatientMutation } from "../generated/graphql";
import { context } from "../utils/context";
import { Navigation } from "../utils/types";

interface Props {
  navigation: Navigation;
  route: {
    params: {
      mrn: string;
      patient: any;
    };
  };
}

const PatientNotes: React.FC<Props> = ({ navigation, route }) => {
  const [, createPatient] = useCreatePatientMutation();
  const { mrn } = route.params;
  const { user } = useContext(context);
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <Image
        style={{ width: 300, height: 250 }}
        source={require("../assets/undraw_doctors_hwty.png")}
      />
      <Text
        style={{ fontSize: 24, fontFamily: "Montserrat-Medium", marginTop: 8 }}
      >
        Add Patient Notes
      </Text>
      <Text
        style={{
          paddingHorizontal: 24,
          textAlign: "center",
          fontSize: 14,
          fontFamily: "Montserrat-Regular",
          marginTop: 10,
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 24,
          width: "100%",
          backgroundColor: "#E5E5E5",
          borderRadius: 20,
          paddingHorizontal: 18,
          paddingTop: 18,
          paddingBottom: 128,
        }}
      >
        <Ionicons name="person" size={25} color="#999999" />
        <TextInput
          multiline
          value={text}
          onChangeText={setText}
          blurOnSubmit
          style={{
            flex: 1,
            color: "#999999",
            fontSize: 16,
            marginLeft: 15,
            fontFamily: "Montserrat-Regular",
          }}
          placeholder="Enter Patient Notes"
          placeholderTextColor="#999999"
        />
      </View>
      <TouchableOpacity
        onPress={async () => {
          const response = await createPatient({
            mrn,
            doctorId: user,
            notes: text,
          });
          console.log(response);
          if (!response.data?.createPatient.error) {
            navigation.navigate("View Patient", {
              patientId: response.data?.createPatient.patient?.id,
            });
          }
        }}
        style={styles.btn}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontFamily: "Montserrat-Medium",
          }}
        >
          Create Patient
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    paddingTop: Constants.statusBarHeight + 96,
    paddingHorizontal: 24,
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    borderRadius: 20,
    padding: 18,
    marginTop: 20,
    backgroundColor: "#B6DCFE",
    justifyContent: "center",
  },
});

export default PatientNotes;
