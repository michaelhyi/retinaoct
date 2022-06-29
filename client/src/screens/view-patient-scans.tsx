import React from "react";
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import BackButton from "../components/BackButton";
import Layout from "../components/Layout";
import ScanCard from "../components/ScanCard";
import { useGetPatientScansQuery } from "../generated/graphql";
import { Navigation, Patient } from "../utils/types";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

interface Props {
  navigation: Navigation;
  route: {
    params: {
      patient: Patient;
    };
  };
}

const ViewPatientScans: React.FC<Props> = ({ navigation, route }) => {
  const patient = route.params.patient;
  const [{ data, fetching }] = useGetPatientScansQuery({
    variables: {
      patientId: patient.id,
    },
  });

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      navigation.navigate("Create Scan", {
        image: result,
        patient: patient,
      });
    }
  };

  if (fetching) {
    return (
      <ActivityIndicator
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      />
    );
  }

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
          Past Scans
        </Text>
        <TouchableOpacity onPress={pickImage} style={{ marginLeft: "auto" }}>
          <Ionicons name="add" size={30} />
        </TouchableOpacity>
      </View>
      {!fetching && data?.getPatientScans.length === 0 ? (
        <View
          style={{
            zIndex: -2,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontAwesome name="exclamation-circle" size={50} />
          <Text
            style={{
              fontFamily: "Montserrat-SemiBold",
              fontSize: 24,
              textAlign: "center",
            }}
          >
            You have no scans!
          </Text>
        </View>
      ) : (
        <FlatList
          style={{ marginTop: 24 }}
          data={data?.getPatientScans}
          renderItem={({ item }) => (
            <ScanCard navigation={navigation} item={item} />
          )}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={
            <View style={{ height: Dimensions.get("window").height / 5 }} />
          }
        />
      )}
    </Layout>
  );
};

export default ViewPatientScans;
