import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import Layout from "../components/Layout";
import React, { useState } from "react";
import { Navigation, Scan } from "../utils/types";
import BackButton from "../components/BackButton";
import DiagnosisDropdown from "../components/DiagnosisDropdown";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  useDeleteScanMutation,
  useUpdateScanMutation,
} from "../generated/graphql";

interface Props {
  navigation: Navigation;
  route: {
    params: {
      scan: Scan;
    };
  };
}

const EditScan: React.FC<Props> = ({ navigation, route }) => {
  const scan = route.params.scan;
  const [diagnosis, setDiagnosis] = useState(scan.diagnosis);
  const [note, setNote] = useState(scan.note);
  const [, updateScan] = useUpdateScanMutation();
  const [, deleteScan] = useDeleteScanMutation();

  const handleUpdate = async () => {
    const result = await updateScan({
      id: scan.id,
      diagnosis,
      note,
    });
    console.log(result);
    Alert.alert("Success!", "Scan succesfully updated!");
    navigation.goBack();
  };

  const handleDelete = async () => {
    Alert.alert(
      "Delete Scan",
      "Are you sure that you want to delete this scan? This action CANNOT be undone.",
      [
        {
          text: "Confirm",
          onPress: async () => {
            await deleteScan({ id: scan.id });
            Alert.alert("Success!", "Succesfully deleted scan!");
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
          Edit Scan
        </Text>
      </View>
      <View style={{ alignItems: "center", marginTop: 24 }}>
        <DiagnosisDropdown value={diagnosis} setValue={setDiagnosis} />
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
            value={note}
            onChangeText={setNote}
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

export default EditScan;
