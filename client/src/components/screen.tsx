import { FC } from "react";
import { StyleSheet, Dimensions, View } from "react-native";
import Constants from "expo-constants";

interface Props {
  children: React.ReactNode;
}

const Screen: FC<Props> = ({ children }): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={{ marginHorizontal: Dimensions.get("window").width / 15 }}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    paddingTop:
      Constants.statusBarHeight + Dimensions.get("window").height / 15,
  },
});

export default Screen;
