import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import React, { useContext } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { context } from "../utils/context";
import BackButton from "../components/BackButton";
import Layout from "../components/Layout";
import {
  useGetPatientQuery,
  useGetPatientScansQuery,
} from "../generated/graphql";
import { Navigation } from "../utils/types";

interface Props {
  navigation: Navigation;
  route: {
    params: {
      patientId: number;
    };
  };
}

const ViewPatient: React.FC<Props> = ({ navigation, route }) => {
  const { user } = useContext(context);
  const patientId = route.params.patientId;

  const [{ data: patient, fetching: fetchingPatient }] = useGetPatientQuery({
    variables: {
      id: patientId,
    },
  });
  const [{ data: scans, fetching: fetchingScans }] = useGetPatientScansQuery({
    variables: {
      patientId,
      limit: 6,
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
        patient: patient?.getPatient,
      });
    }
  };

  if (fetchingPatient) {
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
      <View style={styles.header}>
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
          Patient Details
        </Text>
        {user ? (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Edit Patient", {
                patient: patient?.getPatient,
              })
            }
            style={{
              marginLeft: "auto",
            }}
          >
            <FontAwesome5 name="user-edit" size={20} />
          </TouchableOpacity>
        ) : null}
      </View>
      <View style={{ marginTop: 48, alignItems: "center" }}>
        <Ionicons
          name="person"
          size={100}
          color="#B6DCFE"
          style={{
            shadowColor: "black",
            shadowOpacity: 0.25,
            shadowRadius: 2,
            shadowOffset: {
              width: 0,
              height: 2,
            },
          }}
        />

        <Text
          style={{
            fontFamily: "Montserrat-Medium",
            fontSize: 24,
            marginTop: 24,
          }}
        >
          MRN: #{patient?.getPatient.mrn}
        </Text>
        <Text style={{ fontFamily: "Montserrat-Regular", fontSize: 16 }}>
          Dr.{" "}
          {patient?.getPatient.doctor.firstName +
            " " +
            patient?.getPatient.doctor.lastName}
        </Text>
        <Text style={{ fontFamily: "Montserrat-Regular", fontSize: 16 }}>
          Notes: {patient?.getPatient.notes}
        </Text>
      </View>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 128 }}
      >
        <Text style={{ fontFamily: "Montserrat-Medium", fontSize: 24 }}>
          Recent Scans
        </Text>
        <View
          style={{
            marginLeft: "auto",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {user ? (
            <TouchableOpacity onPress={pickImage} style={{ marginRight: 12 }}>
              <Ionicons name="add" color="#87BEFF" size={30} />
            </TouchableOpacity>
          ) : null}
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("View Patient Scans", {
                patient: patient?.getPatient,
              })
            }
          >
            <FontAwesome name="folder" color="#87BEFF" size={25} />
          </TouchableOpacity>
        </View>
      </View>
      {fetchingScans ? (
        <ActivityIndicator
          style={{
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      ) : (
        <View style={{ flexGrow: 1 }}>
          {scans?.getPatientScans.length === 0 && !fetchingScans ? (
            <View
              style={{
                flexGrow: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontAwesome name="exclamation-circle" size={50} />
              <Text
                style={{
                  marginTop: 12,
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
              horizontal
              showsHorizontalScrollIndicator={false}
              data={scans?.getPatientScans}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("View Scan", { scanId: item.id })
                  }
                  style={{ marginTop: 16, marginRight: 22 }}
                >
                  <Image
                    source={{ uri: item.uri }}
                    style={{ height: 75, width: 75, borderRadius: 15 }}
                  />
                </TouchableOpacity>
              )}
            />
          )}
        </View>
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default ViewPatient;
