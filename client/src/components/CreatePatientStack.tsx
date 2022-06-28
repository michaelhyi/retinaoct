import { createStackNavigator } from "@react-navigation/stack";
import PatientNotes from "../screens/patient-notes";
import CreatePatient from "../screens/create-patient";
import ViewPatient from "../screens/view-patient";

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
    </Stack.Navigator>
  );
};

export default CreatePatientStack;
