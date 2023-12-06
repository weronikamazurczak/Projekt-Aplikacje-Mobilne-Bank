import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import OnboardScreens from './OnboardScreens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './SplashScreen';
import { useEffect } from 'react';
import Login from './Login';
import Register from './Register';

const Stack = createNativeStackNavigator();


export default function App() {
 
  return (
    <GluestackUIProvider config={config}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='SplashScreen'>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="OnboardScreens" component={OnboardScreens} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
          </Stack.Navigator>
        </NavigationContainer>
    </GluestackUIProvider>
  );
}