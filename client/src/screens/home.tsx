import { useContext } from "react";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import HomeHeader from "../components/HomeHeader";
import RecentPatient from "../components/RecentPatient";
import Layout from "../components/Layout";
import { useGetPatientsQuery } from "../generated/graphql";
import { context } from "../utils/context";

const Home = () => {
  const { user } = useContext(context);
  const [{ data, fetching }] = useGetPatientsQuery({
    variables: {
      doctorId: user,
      limit: 4,
    },
  });

  if (fetching) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <Layout>
      <HomeHeader />
      <View style={{ flexDirection: "row", marginTop: 30 }}>
        <Text style={styles.header}>Recent Patients</Text>
        <TouchableOpacity style={{ marginLeft: "auto" }}>
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
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <RecentPatient patient={data?.getPatients[0]} />
        <RecentPatient patient={data?.getPatients[1]} />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <RecentPatient patient={data?.getPatients[2]} />
        <RecentPatient patient={data?.getPatients[3]} />
      </View>
      <View style={{ flexDirection: "row", marginTop: 24 }}>
        <Text style={styles.header}>Recent Scans</Text>
        <TouchableOpacity style={{ marginLeft: "auto" }}>
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
