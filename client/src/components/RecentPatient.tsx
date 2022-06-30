import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Navigation, Patient } from "../utils/types";

interface Props {
  navigation: Navigation;
  patient: Patient | any;
}

const RecentPatient: React.FC<Props> = ({ navigation, patient }) => {
  if (!patient) {
    return null;
  }

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("View Patient", {
          patientId: patient.id,
        })
      }
      style={{
        ...styles.container,
        backgroundColor: "white",
        alignItems: "center",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <FontAwesome name="user" size={30} color="#B6DCFE" />
        <View style={{ flexDirection: "column" }}>
          <Text
            style={{
              marginLeft: 10,
              padding: 1,
              fontFamily: "Montserrat-Regular",
              fontSize: 13,
            }}
          >
            {patient.mrn}
          </Text>
          <Text
            style={{
              marginLeft: 10,
              padding: 1,
              fontSize: 11,
              fontFamily: "Montserrat-Regular",
              color: "#999999",
            }}
          >
            {patient.updatedAtString}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 15,
    marginHorizontal: 6,
  },
});

export default RecentPatient;
