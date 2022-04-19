import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { FC } from "react";

import Home from "../screens/home";
import Patients from "../screens/patients";
import Createpatient from "../screens/createpatient";
import Patientinfo from "../screens/patientinfo";

const Stack = createStackNavigator();

const Stacks: FC = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Patients" component={Patients} />
        <Stack.Screen name="Createpatient" component={Createpatient} />
        <Stack.Screen name="Patientinfo" component={Patientinfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Stacks;
