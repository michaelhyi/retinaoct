import { FC } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const RecentPatient: FC = (): JSX.Element => {
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        backgroundColor: "white",
        alignItems: "center",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <FontAwesome name="user" size={30} color="#B6DCFE" />
        <View style={{ flexDirection: "column" }}>
          <Text
            style={{
              marginLeft: 10,
              padding: 1,
              fontFamily: "Montserrat-Regular",
              fontSize: 14,
            }}
          >
            000000
          </Text>
          <Text
            style={{
              marginLeft: 10,
              padding: 1,
              fontSize: 12,
              fontFamily: "Montserrat-Regular",
              color: "#999999",
            }}
          >
            12/11/21 12:59 AM
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 10,
    padding: 20,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    flexGrow: 1,
    marginRight: 15,
    backgroundColor: "white",
  },
});

export default RecentPatient;
