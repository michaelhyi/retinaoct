import { Feather } from "@expo/vector-icons";
import React, { useContext } from "react";
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useGetPatientsQuery } from "../generated/graphql";
import Screen from "../components/screen";
import { context } from "../utils/context";
import PatientCard from "../components/patientCard";

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

  if (fetching) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <Screen>
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
          />
        </View>
        <FlatList
          data={data?.getPatients}
          renderItem={(item) => <PatientCard item={item.item} />}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={
            <View style={{ height: Dimensions.get("window").height / 5 }} />
          }
        />
      </View>
    </Screen>
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
