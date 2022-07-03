import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Navigation } from "../utils/types";

interface Props {
  navigation: Navigation;
  item: any;
}

const ScanCard: React.FC<Props> = ({ navigation, item }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("View Scan", { scanId: item.id })}
      style={styles.container}
    >
      <Image
        source={{ uri: item.uri }}
        style={{ height: 75, width: 75, borderRadius: 12 }}
      />
      <View style={{ marginLeft: 24 }}>
        <Text style={{ fontFamily: "Montserrat-SemiBold", fontSize: 20 }}>
          {item.updatedAtString}
        </Text>
        <Text style={{ fontFamily: "Montserrat-Regular", fontSize: 14 }}>
          Diagnosis: {item.diagnosis}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    padding: 25,
    width: (Dimensions.get("window").width * 13) / 15,
    marginTop: 18,
    borderRadius: 15,
    alignItems: "center",
  },
});

export default ScanCard;
