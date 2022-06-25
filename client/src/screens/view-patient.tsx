import { Text, View } from "react-native";
import Layout from "../components/Layout";

const ViewPatient = () => {
  return (
    <Layout>
      <View
        style={{ flexGrow: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text>ViewPatient</Text>
      </View>
    </Layout>
  );
};

export default ViewPatient;
