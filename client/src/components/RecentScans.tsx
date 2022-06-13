import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useGetScansQuery } from "../generated/graphql";
import { useContext } from "react";
import { context } from "../utils/context";

const RecentScans = () => {
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
            <TouchableOpacity style={{ marginTop: 16, marginRight: 22 }}>
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
