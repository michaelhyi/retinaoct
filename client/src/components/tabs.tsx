import { FC } from "react";
import { StyleSheet, Dimensions } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";

import Home from "../screens/home";
import CreatePatient from "../screens/create-patient";
import Patients from "../screens/patients";
import Add from "./add";
import Create from "../screens/create-scan";
import Scans from "../screens/scans";
import Settings from "../screens/settings";
import PatientInfo from "../screens/patient-info";
import UploadLeft from "../screens/upload-left";
import UploadRight from "../screens/upload-right";
import LeftResults from "../screens/left-results";
import RightResults from "../screens/right-results";

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
        name="Create Patient"
        component={CreatePatient}
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
        component={RightResults}
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
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },

  icons: {
    top: 12.5,
  },
});

export default Tabs;
