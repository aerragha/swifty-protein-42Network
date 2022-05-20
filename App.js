import "react-native-gesture-handler";
import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/screens/Login";
import Ligands from "./src/screens/Ligands";
import COLORS from "./src/consts/colors";
import * as SplashScreen from "expo-splash-screen";

// Prevent native splash screen from autohiding before App component declaration
SplashScreen.preventAutoHideAsync()
  .then((result) => console.log(`Succeeded: ${result}`))
  .catch(console.warn); // it's good to explicitly catch and inspect any error

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 100);
  }, []);

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      <Stack.Navigator screenOptions={{ header: () => null }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Ligands" component={Ligands} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
