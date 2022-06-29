import { Text, View } from "react-native";
import Layout from "../components/Layout";
import React from "react";
import { Navigation } from "../utils/types";
import BackButton from "../components/BackButton";

interface Props {
  navigation: Navigation;
}

const EditScan: React.FC<Props> = ({ navigation }) => {
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
    </Layout>
  );
};

export default EditScan;
