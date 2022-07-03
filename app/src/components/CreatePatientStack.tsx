import { createStackNavigator } from "@react-navigation/stack";
import PatientNotes from "../screens/patient-notes";
import CreatePatient from "../screens/create-patient";
import ViewPatient from "../screens/view-patient";
import EditPatient from "../screens/edit-patient";
import ViewPatientScans from "../screens/view-patient-scans";
import CreateScan from "../screens/create-scan";
import ViewScan from "../screens/view-scan";
import EditScan from "../screens/edit-scan";

const Stack = createStackNavigator();

const CreatePatientStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Create Patient"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Create Patient" component={CreatePatient} />
      <Stack.Screen name="Patient Notes" component={PatientNotes} />
      <Stack.Screen name="View Patient" component={ViewPatient} />
      <Stack.Screen name="Edit Patient" component={EditPatient} />
      <Stack.Screen name="View Patient Scans" component={ViewPatientScans} />
      <Stack.Screen name="Create Scan" component={CreateScan} />
      <Stack.Screen name="View Scan" component={ViewScan} />
      <Stack.Screen name="Edit Scan" component={EditScan} />
    </Stack.Navigator>
  );
};

export default CreatePatientStack;
