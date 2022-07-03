import React, { useContext } from "react";
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Text,
  View,
} from "react-native";
import BackButton from "../components/BackButton";
import Layout from "../components/Layout";
import ScanCard from "../components/ScanCard";
import { useGetScansQuery } from "../generated/graphql";
import { context } from "../utils/context";
import { Navigation } from "../utils/types";

interface Props {
  navigation: Navigation;
}

const Scans: React.FC<Props> = ({ navigation }) => {
  const { user } = useContext(context);
  const [{ data, fetching }] = useGetScansQuery({
    variables: {
      doctorId: user,
    },
  });

  if (fetching) {
    return (
      <ActivityIndicator
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      />
    );
  }

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
          Past Scans
        </Text>
      </View>
      <FlatList
        style={{ marginTop: 24 }}
        data={data?.getScans}
        renderItem={({ item }) => (
          <ScanCard navigation={navigation} item={item} />
        )}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={
          <View style={{ height: Dimensions.get("window").height / 5 }} />
        }
      />
    </Layout>
  );
};

export default Scans;
