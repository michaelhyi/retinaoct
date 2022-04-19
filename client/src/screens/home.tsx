import { FC } from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { format } from "date-fns";
import Btn from "../components/btn";
import Screen from "../components/screen";
import { FontAwesome } from "@expo/vector-icons";

const Home: FC = (): JSX.Element => {
  return (
    <Screen>
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
      <Text
        style={{
          marginTop: 30,
          fontFamily: "Montserrat-Medium",
          fontSize: 24,
        }}
      >
        Recent Patient Updates
      </Text>
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <Btn
            text="000000"
            desc="12/11/21 12:59 AM"
            style={{
              flexGrow: 1,
              alignItems: "center",
              padding: 20,
              marginRight: 15,
              backgroundColor: "white",
            }}
            icon={<FontAwesome name="user" size={30} color="#B6DCFE" />}
          />
          <Btn
            text="000000"
            desc="12/11/21 12:59 AM"
            style={{
              flexGrow: 1,
              alignItems: "center",
              padding: 20,
              marginRight: 15,
              backgroundColor: "white",
            }}
            icon={<FontAwesome name="user" size={30} color="#B6DCFE" />}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <Btn
            text="000000"
            desc="12/11/21 12:59 AM"
            style={{
              flexGrow: 1,
              alignItems: "center",
              padding: 20,
              marginRight: 15,
              backgroundColor: "white",
            }}
            icon={<FontAwesome name="user" size={30} color="#B6DCFE" />}
          />
          <Btn
            text="000000"
            desc="12/11/21 12:59 AM"
            style={{
              flexGrow: 1,
              alignItems: "center",
              padding: 20,
              marginRight: 15,
              backgroundColor: "white",
            }}
            icon={<FontAwesome name="user" size={30} color="#B6DCFE" />}
          />
        </View>
      </View>
      <Text
        style={{
          marginTop: 30,
          fontFamily: "Montserrat-Medium",
          fontSize: 24,
        }}
      >
        Recent Scans
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <TouchableOpacity>
          <Image source={require("../assets/scan.png")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../assets/scan.png")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../assets/scan.png")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../assets/scan.png")} />
        </TouchableOpacity>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
