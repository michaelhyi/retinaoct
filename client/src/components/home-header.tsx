import { FC } from "react";
import { View, Text } from "react-native";
import { format } from "date-fns";

const HomeHeader: FC = (): JSX.Element => {
  return (
    <View>
      <Text
        style={{
          fontFamily: "Montserrat-SemiBold",
          fontSize: 48,
          shadowColor: "black",
          shadowOpacity: 0.25,
          shadowOffset: {
            width: 0,
            height: 2,
          },
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
