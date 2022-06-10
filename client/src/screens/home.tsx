import { FC, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import Screen from "../components/screen";
import HomeHeader from "../components/home-header";
import RecentPatient from "../components/recent-patient";
import { useGetPatientsQuery } from "../generated/graphql";
import { context } from "../utils/context";

const Home: FC = (): JSX.Element => {
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
    <Screen>
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
        <RecentPatient patient={data?.getPatients[0]} />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <RecentPatient patient={data?.getPatients[0]} />
        <RecentPatient patient={data?.getPatients[0]} />
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
    fontFamily: "Montserrat-Medium",
    fontSize: 18,
  },
});

export default Home;
