import React, { useContext } from "react";
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Layout from "../components/Layout";
import ScanCard from "../components/ScanCard";
import { useGetScansQuery } from "../generated/graphql";
import { context } from "../utils/context";

interface Props {
  navigation: {
    navigate: (name: string) => void;
  };
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
      <View style={styles.header}>
        <Text
          style={{
            marginRight: "auto",
            fontFamily: "Montserrat-SemiBold",
            fontSize: 40,
          }}
        >
          Scan History
        </Text>
        <FlatList
          data={data?.getScans}
          renderItem={({ item }) => <ScanCard item={item} />}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={
            <View style={{ height: Dimensions.get("window").height / 5 }} />
          }
        />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Scans;
