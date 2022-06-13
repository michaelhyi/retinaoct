import { createStackNavigator } from "@react-navigation/stack";
import CreatePatient from "../screens/create-patient";
import Create from "../screens/create-scan";
import PatientInfo from "../screens/patient-info";
import Patients from "../screens/patients";

const Stack = createStackNavigator();

const PatientsStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Patients Screen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Patients Screen" component={Patients} />
      <Stack.Screen name="Create Patients Screen" component={CreatePatient} />
      <Stack.Screen name="Patient Info" component={PatientInfo} />
      <Stack.Screen name="Create Scan" component={Create} />
    </Stack.Navigator>
  );
};

export default PatientsStack;
