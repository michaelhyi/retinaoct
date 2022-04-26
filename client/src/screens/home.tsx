import { FC } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import Btn from "../components/btn";
import Screen from "../components/screen";
import HomeHeader from "../components/home-header";
import RecentPatient from "../components/recent-patient";

const Home: FC = (): JSX.Element => {
  return (
    <Screen>
      <HomeHeader />
      <Text style={styles.header}>Recent Patient Updates</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <RecentPatient />
        <RecentPatient />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <RecentPatient />
        <RecentPatient />
      </View>
      <Text style={styles.header}>Recent Scans</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <TouchableOpacity>
          <Image source={require("../assets/scan.png")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../assets/scan.png")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../assets/scan.png")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../assets/scan.png")} />
        </TouchableOpacity>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    marginTop: 30,
    fontFamily: "Montserrat-Medium",
    fontSize: 24,
  },
});

export default Home;
