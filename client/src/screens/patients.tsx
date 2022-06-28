import { Feather } from "@expo/vector-icons";
import React, { useContext, useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import BackButton from "../components/BackButton";
import Layout from "../components/Layout";
import PatientCard from "../components/PatientCard";
import { useGetPatientsQuery } from "../generated/graphql";
import { context } from "../utils/context";
import { Navigation } from "../utils/types";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

interface Props {
  navigation: Navigation;
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
      <>
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
            Patient Directory
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Create Patient")}
            style={{ marginLeft: "auto" }}
          >
            <Ionicons name="add" size={30} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 24,
            borderRadius: 12,
            padding: 12,
            backgroundColor: "#E5E5E5",
            width: "100%",
          }}
        >
          <Feather
            name="search"
            size={20}
            style={{ marginLeft: 8, marginRight: 14 }}
          />
          <TextInput
            autoCapitalize="none"
            style={{ flex: 1, zIndex: 1 }}
            placeholder="Search doctors"
            placeholderTextColor="black"
            value={search}
            onChangeText={(text) => filter(text)}
            underlineColorAndroid="transparent"
          />
        </View>
        <FlatList
          data={filteredData}
          renderItem={(item) => (
            <PatientCard navigation={navigation} item={item.item} />
          )}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={<View style={{ height: 24 }} />}
        />
      </>
    </Layout>
  );
};

export default Patients;
