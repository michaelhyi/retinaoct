import { FontAwesome } from "@expo/vector-icons";
import React, { useContext } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Navigation } from "../utils/types";
import { useGetScansQuery } from "../generated/graphql";
import { context } from "../utils/context";

interface Props {
  navigation: Navigation;
}

const RecentScans: React.FC<Props> = ({ navigation }) => {
  const { user } = useContext(context);
  const [{ data, fetching }] = useGetScansQuery({
    variables: {
      doctorId: user,
    },
  });

  if (fetching) {
    return (
      <ActivityIndicator
        style={{ flexGrow: 1, justifyContent: "center", alignItems: "center" }}
      />
    );
  }

  return (
    <View>
      {data?.getScans.length === 0 && !fetching ? (
        <View
          style={{
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontAwesome name="exclamation-circle" size={50} />
          <Text
            style={{
              marginTop: 12,
              fontFamily: "Montserrat-SemiBold",
              fontSize: 24,
              textAlign: "center",
            }}
          >
            You have no scans!
          </Text>
        </View>
      ) : (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data?.getScans}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("View Scan")}
              style={{ marginTop: 16, marginRight: 22 }}
            >
              <Image
                source={{ uri: item.url }}
                style={{ height: 75, width: 75, borderRadius: 15 }}
              />
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default RecentScans;
