import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import Patients from "../screens/patients";
import Scans from "../screens/scans";
import ViewPatient from "../screens/view-patient";
import ViewScan from "../screens/view-scan";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="View Patient" component={ViewPatient} />
      <Stack.Screen name="Patients" component={Patients} />
      <Stack.Screen name="View Scan" component={ViewScan} />
      <Stack.Screen name="Scans" component={Scans} />
    </Stack.Navigator>
  );
};

export default HomeStack;
