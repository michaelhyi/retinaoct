import { FC } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Feather, FontAwesome5 } from "@expo/vector-icons";

import Screen from "../components/screen";
import ScanBtn from "../components/scan-btn";

interface Props {
  navigation: {
    navigate: (name: string) => void;
    goBack: () => void;
  };
}

const PatientInfo: FC<Props> = ({ navigation }): JSX.Element => {
  return (
    <Screen>
      <View style={styles.container}>
        <TouchableOpacity style={{ padding: 10 }}>
          <FontAwesome5 name="less-than" size={15} />
        </TouchableOpacity>

        <Text style={styles.header}>MRN: 00000000</Text>
        <Text style={styles.text}>Date Created: 07/21/22 09:41 AM</Text>
        <Text style={styles.text}>Last Updated: 08/31/22 08:52 PM</Text>
        <Text style={styles.text}>
          Notes: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.header}>Recent Scans</Text>
          <Text style={styles.bluetext}>View All</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Create Scan")}
          style={{
            width: "100%",
            borderRadius: 15,
            borderWidth: 1,
            borderStyle: "dashed",
            padding: 30,
            alignItems: "center",
            flexDirection: "row",
            marginTop: 20,
          }}
        >
          <Feather name="plus" size={20} />
          <Text style={styles.addtext}>Add A Scan</Text>
        </TouchableOpacity>
        <ScanBtn
          header="07/21/22 09:41 AM"
          left="Left: Abnormal"
          right="Right: N/A"
          style={{
            marginTop: 20,
            alignItems: "flex-start",
            width: "100%",
            padding: 20,
            backgroundColor: "#CDEDFD",
          }}
          icon={
            <Image
              style={{ height: 50, width: 50 }}
              source={require("../assets/scan.png")}
            />
          }
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignContent: "center",
  },
  header: {
    fontSize: 24,
    fontFamily: "Montserrat-Medium",
    marginTop: 10,
  },
  text: {
    fontSize: 14,
    fontFamily: "Montserrat-Regular",
    color: "#999999",
    marginTop: 5,
  },
  bluetext: {
    fontSize: 20,
    fontFamily: "Montserrat-Medium",
    color: "#B6DCFE",
    marginTop: 10,
  },
  addtext: {
    fontSize: 18,
    fontFamily: "Montserrat-Medium",
    marginLeft: 15,
  },
});

export default PatientInfo;
