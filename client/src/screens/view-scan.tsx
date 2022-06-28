import { Text, View, StyleSheet, Image } from "react-native";
import Layout from "../components/Layout";
import React from "react";
import BackButton from "../components/BackButton";
import { Navigation, Scan } from "../utils/types";

interface Props {
  navigation: Navigation;
  route: {
    params: {
      scan: Scan;
    };
  };
}

const ViewScan: React.FC<Props> = ({ navigation, route }) => {
  const { url, id, diagnosis, updatedAtString, note, patientId } =
    route.params.scan;

  return (
    <Layout>
      <View style={styles.header}>
        <BackButton navigation={navigation} />
      </View>
      <View style={{ alignItems: "center", marginTop: 64 }}>
        <Image
          source={{ uri: url }}
          style={{ width: 300, height: 300, borderRadius: 15 }}
        />
        <Text
          style={{
            fontFamily: "Montserrat-Medium",
            fontSize: 24,
            marginTop: 24,
          }}
        >
          Scan #{id}
        </Text>
        <Text style={{ fontFamily: "Montserrat-Regular", fontSize: 16 }}>
          Patient: {patientId}
        </Text>
        <Text style={{ fontFamily: "Montserrat-Regular", fontSize: 16 }}>
          Diagnosis: {diagnosis}
        </Text>
        <Text style={{ fontFamily: "Montserrat-Regular", fontSize: 16 }}>
          Date: {updatedAtString}
        </Text>
        <Text
          style={{
            fontFamily: "Montserrat-Regular",
            fontSize: 16,
            marginTop: 24,
          }}
        >
          Note: {note}
        </Text>
      </View>
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
