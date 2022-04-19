import { FC } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  style: object;
  onPress: () => void;
}

const Add: FC<Props> = ({ style, onPress }): JSX.Element => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ ...style, ...styles.container }}
    >
      <Ionicons name="add" size={25} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#CDEDFD",
    width: 50,
    height: 50,
    borderRadius: 25,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});

export default Add;
