import { FC } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import HeaderBtn from "../components/header-btn";
import Screen from "../components/screen";
import { FontAwesome } from "@expo/vector-icons";

const Scans: FC = (): JSX.Element => {
  return (
    <Screen>
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
          Scan History
        </Text>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 30,
            }}
          >
            <HeaderBtn
              header="000000"
              desc="Abnormal"
              date="12/11/21 12:59 AM"
              style={{
                alignItems: "flex-start",
                width: "100%",
                padding: 20,
                backgroundColor: "#CDEDFD",
              }}
              icon={
                <Image
                  style={{ height: 50, width: 50 }}
                  source={require("../assets/scan.png")}
                />
              }
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 30,
            }}
          >
            <HeaderBtn
              header="000000"
              desc="Abnormal"
              date="12/11/21 12:59 AM"
              style={{
                alignItems: "flex-start",
                width: "100%",
                padding: 20,
                backgroundColor: "#CDEDFD",
              }}
              icon={
                <Image
                  style={{ height: 50, width: 50 }}
                  source={require("../assets/scan.png")}
                />
              }
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 30,
            }}
          >
            <HeaderBtn
              header="000000"
              desc="Abnormal"
              date="12/11/21 12:59 AM"
              style={{
                alignItems: "flex-start",
                width: "100%",
                padding: 20,
                backgroundColor: "#CDEDFD",
              }}
              icon={
                <Image
                  style={{ height: 50, width: 50 }}
                  source={require("../assets/scan.png")}
                />
              }
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 30,
            }}
          >
            <HeaderBtn
              header="000000"
              desc="Abnormal"
              date="12/11/21 12:59 AM"
              style={{
                alignItems: "flex-start",
                width: "100%",
                padding: 20,
                backgroundColor: "#CDEDFD",
              }}
              icon={
                <Image
                  style={{ height: 50, width: 50 }}
                  source={require("../assets/scan.png")}
                />
              }
            />
          </View>
        </View>
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

export default Scans;
