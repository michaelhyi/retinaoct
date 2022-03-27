import { FC } from "react";
import { StyleSheet, Dimensions, View } from "react-native";
import Constants from "expo-constants";

interface Props {
  children: React.ReactNode;
}

const Screen: FC<Props> = ({ children }): JSX.Element => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    paddingTop:
      Constants.statusBarHeight + Dimensions.get("window").height / 15,
    marginHorizontal: Dimensions.get("window").width / 15,
  },
});

export default Screen;
