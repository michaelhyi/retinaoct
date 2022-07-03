import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Navigation } from "../utils/types";

interface Props {
  navigation: Navigation;
}

const BackButton: React.FC<Props> = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <AntDesign name="arrowleft" size={25} />
    </TouchableOpacity>
  );
};

export default BackButton;
