import React from "react";
import { SafeAreaView, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Components/Login";
import Begin from "./Components/Begin";
import Register from "./Components/Register";

const Stack = createNativeStackNavigator();

export default props => {
    return(
        <SafeAreaView style={{flex:1}}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='Entrar' component={Begin}/>
                    <Stack.Screen name='Login' component={Login}/>
                    <Stack.Screen name='Registrar' component={Register}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}