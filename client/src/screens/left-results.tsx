import { FC } from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";

import Screen from "../components/screen";

const LeftResults: FC = (): JSX.Element => {
  return (
    <Screen>
      <View style={styles.container}>
        <Image
          style={{
            height: 300,
            width: 300,
            shadowColor: "black",
            shadowOpacity: 0.25,
            shadowOffset: { width: 0, height: 4 },
          }}
          source={require("../assets/scan.png")}
        />
        <Text style={styles.header}>Left Eye</Text>
        <Text style={styles.text}>Diagnosis: Abnormal</Text>
        <Text style={styles.text}>Date: 08/31/22 8:52 PM</Text>
        <View style={{ height: 15 }} />
        <Text style={styles.text}>
          Note: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </Text>
        <TouchableOpacity
          style={{
            borderRadius: 15,
            padding: 25,
            backgroundColor: "#B6DCFE",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 50,
          }}
        >
          <Text style={styles.whitetext}>Learn More</Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 20,
    fontFamily: "Montserrat-Medium",
  },
  text: {
    fontSize: 14,
    fontFamily: "Montserrat-Regular",
    marginTop: 5,
  },
  whitetext: {
    fontSize: 20,
    fontFamily: "Montserrat-Medium",
    color: "white",
  },
});

export default LeftResults;
