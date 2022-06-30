import { Text, View } from "react-native";
import Layout from "../components/Layout";

const Splash = () => {
  return (
    <Layout>
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            padding: 35,
            borderRadius: 12,
            marginBottom: 16,
          }}
        />
        <Text style={{ fontFamily: "Montserrat-SemiBold", fontSize: 24 }}>
          RetinaOCT
        </Text>
      </View>
    </Layout>
  );
};

export default Splash;
