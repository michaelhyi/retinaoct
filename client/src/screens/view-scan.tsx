import { Feather } from "@expo/vector-icons";
import React, { useContext } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { context } from "../utils/context";
import BackButton from "../components/BackButton";
import Layout from "../components/Layout";
import { useGetScanQuery } from "../generated/graphql";
import { Navigation } from "../utils/types";

interface Props {
  navigation: Navigation;
  route: {
    params: {
      scanId: number;
    };
  };
}

const ViewScan: React.FC<Props> = ({ navigation, route }) => {
  const { user } = useContext(context);
  const [{ data, fetching }] = useGetScanQuery({
    variables: {
      id: route.params.scanId,
    },
  });

  return (
    <Layout>
      <View style={styles.header}>
        <BackButton navigation={navigation} />
        {user ? (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Edit Scan", {
                scan: data?.getScan,
              })
            }
            style={{ marginLeft: "auto" }}
          >
            <Feather name="edit" size={22.5} />
          </TouchableOpacity>
        ) : null}
      </View>
      {fetching ? (
        <ActivityIndicator
          style={{
            position: "absolute",
            zIndex: -1000,
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      ) : (
        <View style={{ alignItems: "center", marginTop: 64 }}>
          <Image
            source={{ uri: data?.getScan.uri }}
            style={{ width: 300, height: 300, borderRadius: 15 }}
          />
          <Text
            style={{
              fontFamily: "Montserrat-Medium",
              fontSize: 24,
              marginTop: 24,
            }}
          >
            Scan #{data?.getScan.id}
          </Text>
          <Text style={{ fontFamily: "Montserrat-Regular", fontSize: 16 }}>
            Patient #{data?.getScan.patient.mrn}
          </Text>
          <Text style={{ fontFamily: "Montserrat-Regular", fontSize: 16 }}>
            Diagnosis: {data?.getScan.diagnosis}
          </Text>
          <Text style={{ fontFamily: "Montserrat-Regular", fontSize: 16 }}>
            Date: {data?.getScan.updatedAtString}
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-Regular",
              fontSize: 16,
              marginTop: 24,
            }}
          >
            Note: {data?.getScan.note}
          </Text>
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

export default ViewScan;
