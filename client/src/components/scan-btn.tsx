import { FC } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

interface Props {
  onPress?: () => void;
  header?: string;
  left?: string;
  right?: string;
  marginTop?: number;
  icon?: JSX.Element;
  color?: string;
  style?: any;
}

const ScanBtn: FC<Props> = ({
  onPress,
  header,
  left,
  right,
  marginTop,
  icon,
  color,
  style,
}): JSX.Element => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.container,
        marginTop: marginTop,
        backgroundColor: color ? color : "lightgrey",
        ...style,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {icon}
        <View style={{ flexDirection: "column" }}>
          <Text
            style={{
              marginLeft: 10,
              padding: 1,
              fontSize: 18,
              fontFamily: "Montserrat-SemiBold",
            }}
          >
            {header}
          </Text>
          <Text
            style={{
              marginLeft: 10,
              padding: 1,
              fontSize: 16,
              fontFamily: "Montserrat-Regular",
              color: "#999999",
            }}
          >
            {left}
          </Text>
          <Text
            style={{
              marginLeft: 10,
              padding: 1,
              fontSize: 16,
              fontFamily: "Montserrat-Regular",
              color: "#999999",
            }}
          >
            {right}
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

export default ScanBtn;
