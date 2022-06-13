import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
  onPress?: () => void;
  text?: string;
  desc?: string;
  date?: string;
  marginTop?: number;
  icon?: JSX.Element;
  color?: string;
  style?: any;
}

const Btn: React.FC<Props> = ({
  onPress,
  text,
  desc,
  date,
  marginTop,
  icon,
  color,
  style,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.container,
        marginTop: marginTop,
        backgroundColor: color ? color : "lightgrey",
        ...style,
        alignItems: "center",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {icon}
        <View style={{ flexDirection: "column" }}>
          <Text
            style={{
              marginLeft: 10,
              padding: 1,
              fontFamily: "Montserrat-Regular",
              fontSize: 14,
            }}
          >
            {text}
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
            {desc}
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
    padding: 15,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },
});

export default Btn;
