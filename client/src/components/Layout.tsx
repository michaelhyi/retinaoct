import Constants from "expo-constants";
import React from "react";
import { StyleSheet, View } from "react-native";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    paddingTop: Constants.statusBarHeight + 64,
    paddingHorizontal: 24,
  },
});

export default Layout;