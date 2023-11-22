import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Onboard } from '../src/oneboard';
import { Login } from '../src/auth/login';
import { useState, useEffect } from "react"
import { Services } from '../services';
import { Home } from '../src/screens/home';

function StackNavgation() {
    const Stack = createNativeStackNavigator();
    const [checked, setChecked] = useState(Boolean);

    useEffect(() => {

        Services.getData()
            .then((res) => {
                setChecked(res)
                console.log('Checked:', res)
            })

    }, [])
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {checked == true ?
                    <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                    :
                    <Stack.Screen name="OnBoard" component={Onboard} options={{ headerShown: false }} />
                }
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackNavgation;