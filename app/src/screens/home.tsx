import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Navigation } from "../utils/types";
import HomeHeader from "../components/HomeHeader";
import Layout from "../components/Layout";
import RecentPatients from "../components/RecentPatients";
import RecentScans from "../components/RecentScans";

interface Props {
  navigation: Navigation;
}

const Home: React.FC<Props> = ({ navigation }) => {
  return (
    <Layout>
      <HomeHeader />
      <View style={{ flexDirection: "row", marginTop: 30 }}>
        <Text style={styles.header}>Recent Patients</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Patients")}
          style={{ marginLeft: "auto" }}
        >
          <Text
            style={{
              fontFamily: "Montserrat-Medium",
              fontSize: 16,
              color: "#0075FF",
            }}
          >
            View All
          </Text>
        </TouchableOpacity>
      </View>
      <RecentPatients navigation={navigation} />

      <View style={{ flexDirection: "row", marginTop: 24 }}>
        <Text style={styles.header}>Recent Scans</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Scans")}
          style={{ marginLeft: "auto" }}
        >
          <Text
            style={{
              fontFamily: "Montserrat-Medium",
              fontSize: 16,
              color: "#0075FF",
            }}
          >
            View All
          </Text>
        </TouchableOpacity>
      </View>
      <RecentScans navigation={navigation} />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    fontFamily: "Montserrat-Medium",
    fontSize: 18,
  },
});

export default Home;
