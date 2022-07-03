import { createStackNavigator } from "@react-navigation/stack";
import ViewPatientScans from "../screens/view-patient-scans";
import EditPatient from "../screens/edit-patient";
import Home from "../screens/home";
import Patients from "../screens/patients";
import Scans from "../screens/scans";
import ViewPatient from "../screens/view-patient";
import ViewScan from "../screens/view-scan";
import CreateScan from "../screens/create-scan";
import CreatePatient from "../screens/create-patient";
import PatientNotes from "../screens/patient-notes";
import EditScan from "../screens/edit-scan";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home Screen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home Screen" component={Home} />
      <Stack.Screen name="Create Patient" component={CreatePatient} />
      <Stack.Screen name="Patient Notes" component={PatientNotes} />
      <Stack.Screen name="View Patient" component={ViewPatient} />
      <Stack.Screen name="Edit Patient" component={EditPatient} />
      <Stack.Screen name="View Patient Scans" component={ViewPatientScans} />
      <Stack.Screen name="Create Scan" component={CreateScan} />
      <Stack.Screen name="Patients" component={Patients} />
      <Stack.Screen name="View Scan" component={ViewScan} />
      <Stack.Screen name="Edit Scan" component={EditScan} />
      <Stack.Screen name="Scans" component={Scans} />
    </Stack.Navigator>
  );
};

export default HomeStack;
