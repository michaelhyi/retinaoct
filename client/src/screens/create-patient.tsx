import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";
import React, { useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Navigation } from "../utils/types";

interface Props {
  navigation: Navigation;
}

const CreatePatient: React.FC<Props> = ({ navigation }) => {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <Image
        style={{ width: 300, height: 250 }}
        source={require("../assets/undraw_doctor_kw5l.png")}
      />
      <Text style={styles.header}>Enter Patient MRN</Text>
      <Text style={styles.desc}>
        This MRN should be unique for each patient. This identifier should
        correspond with your own medical records, therefore a security breach
        would not mean that patient data is comprised since MRN's are rendered
        useless without the actual records.
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 24,
          width: "100%",
          backgroundColor: "#E5E5E5",
          borderRadius: 20,
          padding: 18,
        }}
      >
        <Ionicons name="person" size={25} color="#999999" />
        <TextInput
          value={text}
          onChangeText={setText}
          style={{
            flex: 1,
            color: "#999999",
            fontSize: 16,
            marginLeft: 15,
            fontFamily: "Montserrat-Regular",
          }}
          placeholder="Enter MRN"
          placeholderTextColor="#999999"
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          if (text.length !== 0) {
            navigation.navigate("Patient Notes", {
              mrn: text,
            });
          } else {
            Alert.alert("Error!", "You must input an MRN!");
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
          Next
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Constants.statusBarHeight + 96,
    paddingHorizontal: 24,
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    fontFamily: "Montserrat-Medium",
    marginTop: 8,
  },
  desc: {
    paddingHorizontal: 24,
    textAlign: "center",
    fontSize: 14,
    fontFamily: "Montserrat-Regular",
    marginTop: 10,
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

export default CreatePatient;
