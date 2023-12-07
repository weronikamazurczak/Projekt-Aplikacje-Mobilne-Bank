import { config } from "@gluestack-ui/config";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import OnboardScreens from "./OnboardScreens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from "./SplashScreen";
import { useEffect } from "react";
import Login from "./Login";
import Register from "./Register";
import { AddCard } from "./AddCard";
import HomeScreen from "./HomeScreen";
import Products from "./Products";
import Profil from "./Profil";
import Historia from "./Historia";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Pulpit" component={HomeScreen} />
      <Tab.Screen name="Historia" component={Historia} />
      <Tab.Screen name="Produkty" component={Products} />
      <Tab.Screen name="Profil" component={Profil} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="HomeScreen"
        >
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="OnboardScreens" component={OnboardScreens} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="AddCard" component={AddCard} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />

          <Stack.Screen name="Home" component={TabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
