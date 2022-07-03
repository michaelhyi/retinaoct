import { format } from "date-fns";
import React from "react";
import { Text, View } from "react-native";

const HomeHeader: React.FC = () => {
  return (
    <View style={{ marginTop: 32 }}>
      <Text
        style={{
          fontFamily: "Montserrat-SemiBold",
          fontSize: 48,
        }}
      >
        Home
      </Text>
      <Text
        style={{
          fontFamily: "Montserrat-Medium",
          fontSize: 18,
          color: "#999999",
        }}
      >
        {format(new Date(), "EEEE, MMMM do, yyyy")}
      </Text>
      <Text
        style={{
          fontFamily: "Montserrat-Medium",
          fontSize: 18,
          color: "#999999",
        }}
      >
        {format(new Date(), "p")}
      </Text>
    </View>
  );
};

export default HomeHeader;
