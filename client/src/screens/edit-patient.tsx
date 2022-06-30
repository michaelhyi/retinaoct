import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import BackButton from "../components/BackButton";
import Layout from "../components/Layout";
import {
  useDeletePatientMutation,
  useUpdatePatientMutation,
} from "../generated/graphql";
import { Navigation, Patient } from "../utils/types";

interface Props {
  navigation: Navigation;
  route: {
    params: {
      patient: Patient;
    };
  };
}

const EditPatient: React.FC<Props> = ({ navigation, route }) => {
  const patient = route.params.patient;
  const [mrn, setMrn] = useState(patient.mrn);
  const [notes, setNotes] = useState(patient.notes);
  const [, updatePatient] = useUpdatePatientMutation();
  const [, deletePatient] = useDeletePatientMutation();

  const handleUpdate = async () => {
    await updatePatient({
      id: patient.id,
      mrn,
      notes,
    });
    Alert.alert("Success!", "Scan succesfully updated!");
    navigation.goBack();
  };

  const handleDelete = async () => {
    Alert.alert(
      "Delete Patient",
      "Are you sure that you want to delete this patient? This action CANNOT be undone.",
      [
        {
          text: "Confirm",
          onPress: async () => {
            await deletePatient({ id: patient.id });
            Alert.alert("Success!", "Succesfully deleted patient!");
            navigation.goBack();
            navigation.goBack();
          },
        },
        {
          text: "Cancel",
          style: "cancel",
        },
      ]
    );
  };

  return (
    <Layout>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <BackButton navigation={navigation} />
        <Text
          style={{
            zIndex: -1,
            fontFamily: "Montserrat-SemiBold",
            fontSize: 24,
            position: "absolute",
            left: 0,
            right: 0,
            textAlign: "center",
          }}
        >
          Edit Patient
        </Text>
      </View>
      <View style={{ alignItems: "center", marginTop: 24 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 18,
            width: "100%",
            backgroundColor: "#E5E5E5",
            borderRadius: 20,
            padding: 18,
          }}
        >
          <Ionicons name="person" size={25} color="#999999" />
          <TextInput
            value={mrn}
            onChangeText={setMrn}
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
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            backgroundColor: "#E5E5E5",
            borderRadius: 20,
            paddingHorizontal: 18,
            paddingTop: 18,
            paddingBottom: 96,
          }}
        >
          <Feather name="edit" size={22.5} color="#999999" />
          <TextInput
            multiline
            value={notes}
            onChangeText={setNotes}
            blurOnSubmit
            style={{
              flex: 1,
              color: "#999999",
              fontSize: 16,
              marginLeft: 15,
              fontFamily: "Montserrat-Regular",
            }}
            placeholder="Enter Scan Note"
            placeholderTextColor="#999999"
          />
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            onPress={handleUpdate}
            style={{ ...styles.btn, backgroundColor: "#87BEFF" }}
          >
            <Feather
              style={{
                shadowOpacity: 0.25,
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
              }}
              name="edit"
              size={20}
              color="white"
            />
            <Text style={styles.txt}>Update Scan</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleDelete}
            style={{ ...styles.btn, backgroundColor: "#FF7575" }}
          >
            <MaterialCommunityIcons
              style={{
                shadowOpacity: 0.25,
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
              }}
              name="delete"
              color="white"
              size={20}
            />
            <Text style={styles.txt}>Delete Scan</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  btn: {
    marginTop: 24,
    flexDirection: "row",
    alignItems: "center",
    padding: 25,
    borderRadius: 12,
    marginHorizontal: 12,
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  txt: {
    marginLeft: 8,
    color: "white",
    fontFamily: "Montserrat-SemiBold",
    fontSize: 14,
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
});

export default EditPatient;
