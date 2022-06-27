import { StyleSheet, Text, View } from "react-native";
import BackButton from "../components/BackButton";
import Layout from "../components/Layout";
import React from "react";
import { Navigation } from "../utils/types";

interface Props {
  navigation: Navigation;
  route: {
    params: {
      patient: {
        mrn: string;
      };
    };
  };
}

const ViewPatient: React.FC<Props> = ({ navigation, route }) => {
  const { mrn } = route.params.patient;

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
          Patient #{mrn}
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

export default ViewPatient;
