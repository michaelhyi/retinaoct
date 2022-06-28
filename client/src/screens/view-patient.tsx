import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import BackButton from "../components/BackButton";
import Layout from "../components/Layout";
import { useGetPatientScansQuery } from "../generated/graphql";
import { Navigation, Patient } from "../utils/types";

interface Props {
  navigation: Navigation;
  route: {
    params: {
      patient: Patient;
    };
  };
}

const ViewPatient: React.FC<Props> = ({ navigation, route }) => {
  const patient = route.params.patient;
  const [{ data, fetching }] = useGetPatientScansQuery({
    variables: {
      patientId: patient.id,
    },
  });

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
        <TouchableOpacity
          onPress={() => navigation.navigate("Edit Patient", { patient })}
          style={{
            marginLeft: "auto",
          }}
        >
          <FontAwesome5 name="user-edit" size={20} />
        </TouchableOpacity>
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
          MRN: #{patient.mrn}
        </Text>
        <Text style={{ fontFamily: "Montserrat-Regular", fontSize: 16 }}>
          Dr. {patient.doctor.firstName + " " + patient.doctor.lastName}
        </Text>
        <Text style={{ fontFamily: "Montserrat-Regular", fontSize: 16 }}>
          Notes: {patient.notes}
        </Text>
      </View>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 24 }}
      >
        <Text style={{ fontFamily: "Montserrat-Medium", fontSize: 18 }}>
          Recent Scans
        </Text>
        <View
          style={{
            marginLeft: "auto",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity style={{ marginRight: 12 }}>
            <Ionicons name="add" color="#87BEFF" size={30} />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="folder" color="#87BEFF" size={25} />
          </TouchableOpacity>
        </View>
      </View>
      {fetching ? (
        <ActivityIndicator
          style={{
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      ) : (
        <View>
          {data?.getPatientScans.length === 0 && !fetching ? (
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
              data={data?.getPatientScans}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("View Scan", { scan: item as any })
                  }
                  style={{ marginTop: 16, marginRight: 22 }}
                >
                  <Image
                    source={{ uri: item.url }}
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
