import { FC } from "react";
import { StyleSheet, Dimensions, View, Text } from "react-native";

const Settings: FC = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Settings;
