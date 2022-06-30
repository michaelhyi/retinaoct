import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Navigation, Patient } from "../utils/types";

interface Props {
  navigation: Navigation;
  item: Patient;
}

const PatientCard: React.FC<Props> = ({ navigation, item }) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("View Patient", { patientId: item.id })
      }
      style={styles.container}
    >
      <FontAwesome name="user" size={50} color="#B6DCFE" />
      <View style={{ marginLeft: 24 }}>
        <Text style={{ fontFamily: "Montserrat-SemiBold", fontSize: 20 }}>
          {item.mrn}
        </Text>
        <Text style={{ fontFamily: "Montserrat-Regular", fontSize: 14 }}>
          {item.updatedAtString}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    padding: 25,
    width: (Dimensions.get("window").width * 13) / 15,
    marginTop: 18,
    borderRadius: 15,
    alignItems: "center",
  },
});

export default PatientCard;
