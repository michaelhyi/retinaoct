import { FC } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { DataTable } from "react-native-paper";

import Screen from "../components/screen";

interface Props {
  navigation: {
    navigate: (name: string) => void;
  };
}

const Patients: FC<Props> = ({ navigation }) => {
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
          <Feather name="search" size={30} />
          <TextInput
            style={styles.input}
            placeholder="Search"
            placeholderTextColor="#000000"
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Create Patients Screen");
            }}
            style={{ marginLeft: "auto" }}
          >
            <Feather name="user-plus" size={30} />
          </TouchableOpacity>
        </View>
      </View>
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
            <Text style={{ fontFamily: "Montserrat-Medium", fontSize: 14 }}>
              000000
            </Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text style={{ fontFamily: "Montserrat-Medium", fontSize: 14 }}>
              12/2/22 2:48 PM
            </Text>
          </DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>
            <Text style={{ fontFamily: "Montserrat-Medium", fontSize: 14 }}>
              000000
            </Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text style={{ fontFamily: "Montserrat-Medium", fontSize: 14 }}>
              12/2/22 2:48 PM
            </Text>
          </DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>
            <Text style={{ fontFamily: "Montserrat-Medium", fontSize: 14 }}>
              000000
            </Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text style={{ fontFamily: "Montserrat-Medium", fontSize: 14 }}>
              12/2/22 2:48 PM
            </Text>
          </DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>
            <Text style={{ fontFamily: "Montserrat-Medium", fontSize: 14 }}>
              000000
            </Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text style={{ fontFamily: "Montserrat-Medium", fontSize: 14 }}>
              12/2/22 2:48 PM
            </Text>
          </DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>
            <Text style={{ fontFamily: "Montserrat-Medium", fontSize: 14 }}>
              000000
            </Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text style={{ fontFamily: "Montserrat-Medium", fontSize: 14 }}>
              12/2/22 2:48 PM
            </Text>
          </DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>
            <Text style={{ fontFamily: "Montserrat-Medium", fontSize: 14 }}>
              000000
            </Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text style={{ fontFamily: "Montserrat-Medium", fontSize: 14 }}>
              12/2/22 2:48 PM
            </Text>
          </DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>
            <Text style={{ fontFamily: "Montserrat-Medium", fontSize: 14 }}>
              000000
            </Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text style={{ fontFamily: "Montserrat-Medium", fontSize: 14 }}>
              12/2/22 2:48 PM
            </Text>
          </DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>
            <Text style={{ fontFamily: "Montserrat-Medium", fontSize: 14 }}>
              000000
            </Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text style={{ fontFamily: "Montserrat-Medium", fontSize: 14 }}>
              12/2/22 2:48 PM
            </Text>
          </DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>
            <Text style={{ fontFamily: "Montserrat-Medium", fontSize: 14 }}>
              000000
            </Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text style={{ fontFamily: "Montserrat-Medium", fontSize: 14 }}>
              12/2/22 2:48 PM
            </Text>
          </DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>
            <Text style={{ fontFamily: "Montserrat-Medium", fontSize: 14 }}>
              000000
            </Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text style={{ fontFamily: "Montserrat-Medium", fontSize: 14 }}>
              12/2/22 2:48 PM
            </Text>
          </DataTable.Cell>
        </DataTable.Row>
      </DataTable>
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
