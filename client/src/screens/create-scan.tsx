import { Ionicons } from "@expo/vector-icons";
import { format } from "date-fns";
import React, { useContext, useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import BackButton from "../components/BackButton";
import DiagnosisDropdown from "../components/DiagnosisDropdown";
import Layout from "../components/Layout";
import { useCreateScanMutation } from "../generated/graphql";
import { context } from "../utils/context";
import { Navigation, Patient } from "../utils/types";

interface Props {
  navigation: Navigation;
  route: {
    params: {
      image: {
        uri: string;
      };
      patient: Patient;
    };
  };
}

const CreateScan: React.FC<Props> = ({ navigation, route }) => {
  const { image, patient } = route.params;
  const [diagnosis, setDiagnosis] = useState("");
  const [note, setNote] = useState("");
  const [text, setText] = useState("");
  const { user } = useContext(context);
  const [, createScan] = useCreateScanMutation();

  const handleSubmit = async () => {
    if (diagnosis === "Other") {
      setDiagnosis(text);
    }
    if (diagnosis.length === 0) {
      Alert.alert("Error", "You must make a diagnosis!");
      return;
    }
    await createScan({
      url: image.uri,
      diagnosis,
      note,
      doctorId: user,
      patientId: patient.id,
    });

    Alert.alert("Success!", "Scan successfully uploaded!");
    navigation.goBack();
  };

  return (
    <Layout>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <BackButton navigation={navigation} />
        </View>
        <View style={{ alignItems: "center", marginTop: 64 }}>
          <Image
            source={{ uri: image.uri }}
            style={{ width: 300, height: 300, borderRadius: 15 }}
          />
          <Text
            style={{
              fontFamily: "Montserrat-Medium",
              fontSize: 24,
              marginTop: 12,
            }}
          >
            {format(new Date(), "P p")}
          </Text>
          <DiagnosisDropdown value={diagnosis} setValue={setDiagnosis} />
          {diagnosis === "Other" ? (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 12,
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
                placeholder="Custom Diagnosis"
                placeholderTextColor="#999999"
              />
            </View>
          ) : null}
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
            <Ionicons name="person" size={25} color="#999999" />
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
          <TouchableOpacity onPress={handleSubmit} style={styles.btn}>
            <Text
              style={{
                color: "white",
                fontSize: 20,
                fontFamily: "Montserrat-Medium",
              }}
            >
              Upload Scan
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: 128 }} />
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#F2F2F2",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    zIndex: 1,
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    borderRadius: 20,
    padding: 18,
    marginTop: 12,
    backgroundColor: "#B6DCFE",
    justifyContent: "center",
  },
});

export default CreateScan;
