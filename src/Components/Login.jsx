import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from "react-native";
import Lock from 'react-native-vector-icons/Ionicons';
// lock-closed-outline
import Email from 'react-native-vector-icons/MaterialIcons';
// alternate-email


export default props => {
    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <View style={styleInicial.iconTop}>
                <Image style={styleInicial.imgIni} source={require('./img/login.png')}/>
            </View>
            <Text>Login</Text>
            <TextInput 
                
                placeholder="Nome"
                color={`#86673f`} 
                placeholderTextColor={`#fbd78b`}
                
            />

            <TextInput
                placeholder="Email"
                color={`#86673f`} 
                placeholderTextColor={`#fbd78b`}
            />
                <TouchableOpacity style={styleInicial.btn} onPress={() => props.navigation.navigate('Registrar')}>
                    <View style={styleInicial.teste}>
                    <Text style={styleInicial.txtBnt}>Entrar agora!</Text>
                    </View>
                </TouchableOpacity>
        </View>
    )
}

const styleInicial = StyleSheet.create(
    {
        imgIni:{
            height: 300,
            width: 300,
        },
        iconTop:{
            flexDirection:`row`,
            marginBottom:25,
        }
    }
)