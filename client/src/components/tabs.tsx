import { FC } from "react";
import { StyleSheet, Dimensions } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";

import Home from "../screens/home";
import Createpatient from "../screens/createpatient";
import Patients from "../screens/patients";
import Add from "./add";
import Create from "../screens/createscan";
import Scans from "../screens/scans";
import Settings from "../screens/settings";
import Patientinfo from "../screens/patientinfo";
import Uploadleft from "../screens/uploadleft";
import Uploadright from "../screens/uploadright";
import Leftresults from "../screens/leftresults";
import Rightresults from "../screens/rightresults";

const Tab = createBottomTabNavigator();

const Tabs: FC = (): JSX.Element => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.container,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <Ionicons name="home" size={25} style={styles.icons} />
          ),
        }}
      />
      <Tab.Screen
        name="Patients"
        component={Patients}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="folder-account"
              size={25}
              style={styles.icons}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Createpatient"
        component={Createpatient}
        options={{
          tabBarIcon: () => <Add style={styles.icons} />,
        }}
      />
      <Tab.Screen
        name="Scans"
        component={Scans}
        options={{
          tabBarIcon: () => (
            <FontAwesome name="folder" size={25} style={styles.icons} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Rightresults}
        options={{
          tabBarIcon: () => (
            <FontAwesome name="gear" size={25} style={styles.icons} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: Dimensions.get("window").height / 25,
    marginHorizontal: Dimensions.get("window").width / 15,
    borderRadius: 15,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  icons: {
    top: 12.5,
  },
});

export default Tabs;
