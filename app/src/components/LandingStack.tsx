import { createStackNavigator } from "@react-navigation/stack";
import Register from "../screens/register";
import Login from "../screens/login";
import ViewPatientFile from "../screens/view-patient-file";
import ViewPatient from "../screens/view-patient";
import ViewScan from "../screens/view-scan";
import ViewPatientScans from "../screens/view-patient-scans";

const Stack = createStackNavigator();

const LandingStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="View Patient File" component={ViewPatientFile} />
      <Stack.Screen name="View Patient" component={ViewPatient} />
      <Stack.Screen name="View Scan" component={ViewScan} />
      <Stack.Screen name="View Patient Scans" component={ViewPatientScans} />
    </Stack.Navigator>
  );
};

export default LandingStack;
