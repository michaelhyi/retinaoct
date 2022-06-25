import { Text, View } from "react-native";
import Layout from "../components/Layout";

const ViewScan = () => {
  return (
    <Layout>
      <View
        style={{ flexGrow: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text>ViewScan</Text>
      </View>
    </Layout>
  );
};

export default ViewScan;
