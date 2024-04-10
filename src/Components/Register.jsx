import React from "react";
import { View, Text, Button } from "react-native";

export default props => {
    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>Register!</Text>

            {/* <Button
                title="Não tem conta?"
                onPress={() => props.navigation.navigate('Register')}
            /> */}
        </View>
    )
}