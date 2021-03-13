import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}