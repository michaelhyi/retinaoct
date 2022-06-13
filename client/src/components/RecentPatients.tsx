import { useContext } from "react";
import { ActivityIndicator, View, StyleSheet, Text } from "react-native";
import { context } from "../utils/context";
import { useGetPatientsQuery } from "../generated/graphql";
import RecentPatient from "./RecentPatient";
import { FontAwesome } from "@expo/vector-icons";

const RecentPatients = () => {
  const { user } = useContext(context);
  const [{ data, fetching }] = useGetPatientsQuery({
    variables: {
      doctorId: user,
      limit: 4,
    },
  });

  if (fetching) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.container}>
      {!data && !fetching ? (
        <View
          style={{
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontAwesome name="exclamation-circle" size={50} />
          <Text
            style={{
              marginTop: 12,
              fontFamily: "Montserrat-SemiBold",
              fontSize: 24,
              textAlign: "center",
            }}
          >
            You have no patients!
          </Text>
        </View>
      ) : (
        <>
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
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 192,
  },
});

export default RecentPatients;
