import { FC } from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { format } from "date-fns";
import Btn from "../components/btn";
import Screen from "../components/screen";
import { Feather } from "@expo/vector-icons";
import { DataTable } from "react-native-paper";

const Patients: FC = (): JSX.Element => {
  return (
    <Screen>
      <View style={styles.header}>
        <Text
          style={{
            fontFamily: "Montserrat-SemiBold",
            fontSize: 40,
            shadowColor: "black",
            shadowOpacity: 0.25,
            shadowOffset: {
              width: 0,
              height: 2,
            },
          }}
        >
          Patient Directory
        </Text>
        <View
          style={{ width: "100%", flexDirection: "row", alignItems: "center" }}
        >
          <Feather name="search" size="30" />
          <TextInput
            style={styles.input}
            placeholder="Search"
            placeholderTextColor="#000000"
          />
          <TouchableOpacity style={{ marginLeft: "auto" }}>
            <Feather name="user-plus" size="30" />
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>
              <Text style={{ fontFamily: "Montserrat-Medium", fontSize: 14 }}>
                MRN
              </Text>
            </DataTable.Title>
            <DataTable.Title>
              <Text style={{ fontFamily: "Montserrat-Medium", fontSize: 14 }}>
                LAST UPDATED
              </Text>
            </DataTable.Title>
          </DataTable.Header>

          <DataTable.Row>
            <DataTable.Cell>
              <Text
                style={{ fontFamily: "Montserrat-Medium", fontSize: 14 }}
              ></Text>
              000000
            </DataTable.Cell>
            <DataTable.Cell>12/2/22 2:48 PM</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>000000</DataTable.Cell>
            <DataTable.Cell>12/2/22 2:48 PM</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>000000</DataTable.Cell>
            <DataTable.Cell>12/2/22 2:48 PM</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>000000</DataTable.Cell>
            <DataTable.Cell>12/2/22 2:48 PM</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>000000</DataTable.Cell>
            <DataTable.Cell>12/2/22 2:48 PM</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>000000</DataTable.Cell>
            <DataTable.Cell>12/2/22 2:48 PM</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>000000</DataTable.Cell>
            <DataTable.Cell>12/2/22 2:48 PM</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>000000</DataTable.Cell>
            <DataTable.Cell>12/2/22 2:48 PM</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>000000</DataTable.Cell>
            <DataTable.Cell>12/2/22 2:48 PM</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>000000</DataTable.Cell>
            <DataTable.Cell>12/2/22 2:48 PM</DataTable.Cell>
          </DataTable.Row>
        </DataTable>
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
    height: 40,
    margin: 12,
    padding: 10,
    borderRadius: 15,
    backgroundColor: "#E5E5E5",
    width: "60%",
  },
});

export default Patients;
