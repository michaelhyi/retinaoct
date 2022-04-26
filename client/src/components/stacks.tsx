import { createStackNavigator } from "@react-navigation/stack";
import { FC } from "react";

import Home from "../screens/home";
import Patients from "../screens/patients";
import CreatePatient from "../screens/create-patient";
import PatientInfo from "../screens/patient-info";

const Stack = createStackNavigator();

const Stacks: FC = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Patients" component={Patients} />
      <Stack.Screen name="Create Patient" component={CreatePatient} />
      <Stack.Screen name="Patient Info" component={PatientInfo} />
    </Stack.Navigator>
  );
};

export default Stacks;
