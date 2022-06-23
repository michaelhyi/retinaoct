import { Feather } from "@expo/vector-icons";
import React, { useContext, useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Layout from "../components/Layout";
import PatientCard from "../components/PatientCard";
import { useGetPatientsQuery } from "../generated/graphql";
import { context } from "../utils/context";

interface Props {
  navigation: {
    navigate: (name: string) => void;
  };
}

const Patients: React.FC<Props> = ({ navigation }) => {
  const { user } = useContext(context);
  const [{ data, fetching }] = useGetPatientsQuery({
    variables: {
      doctorId: user,
    },
  });
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState<any>(null);

  useEffect(() => {
    if (!fetching && typeof data?.getPatients !== "undefined") {
      setFilteredData(data.getPatients);
    }
  }, [data, fetching]);

  const filter = (text: string) => {
    if (text.length === 0) setSearch("");
    else if (text && data) {
      const newData = data.getPatients.filter((item: any) => {
        const itemData = item.mrn ? item.mrn.toUpperCase() : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
      setSearch(text);
    }
  };

  if (fetching) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <Layout>
      <View style={styles.header}>
        <Text
          style={{
            fontFamily: "Montserrat-SemiBold",
            fontSize: 40,
          }}
        >
          Patient Directory
        </Text>
        <View style={styles.input}>
          <Feather name="search" size={20} style={{ marginRight: 12 }} />
          <TextInput
            style={{ flex: 1, zIndex: 1 }}
            placeholder="Search"
            placeholderTextColor="#000000"
            autoCapitalize="none"
            value={search}
            onChangeText={(text) => filter(text)}
            underlineColorAndroid="transparent"
          />
        </View>
        <FlatList
          data={filteredData}
          renderItem={(item) => <PatientCard item={item.item} />}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={<View style={{ height: 24 }} />}
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
  input: {
    flexDirection: "row",
    alignItems: "center",
    margin: 12,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: "#E5E5E5",
    width: "100%",
  },
});

export default Patients;
