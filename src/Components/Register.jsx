import React from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



export default props => {
    return(
        <View style={{marginLeft: 20, marginRight: 20}}>

            <View style={styleRegister.iconTop}>
                <Image style={styleRegister.imgReg} source={require('./img/register.png')}/>
            </View>

            <Text style={styleRegister.title}>Register</Text>

            <View style={styleRegister.reg2}>
                <View style={styleRegister.linha}>
                    <Image style={styleRegister.imgRegSub} source={require('./img/google.png')}/>
                </View>
                <View style={styleRegister.linha}>
                    <Image style={styleRegister.imgRegSub} source={require('./img/facebook.png')}/>
                </View>
                <View style={styleRegister.linha}>
                    <Image style={styleRegister.imgRegSub} source={require('./img/twitter.png')}/>
                </View>
            </View>

            <Text style={styleRegister.txt}>Ou faça Login com o email...</Text>

            <View style={styleRegister.view}>
                <Ionicons name="person-outline" size={20} color="#000"/>
                    <TextInput 
                    placeholder="Nome completo"
                    color={`#a97bff`} 
                    placeholderTextColor={`#000000`}
                />
            </View>

            <View style={styleRegister.view}>
                <MaterialIcons name="alternate-email" size={20} color="#000"/>
                    <TextInput 
                    placeholder="Email"
                    color={`#a97bff`} 
                    placeholderTextColor={`#000000`}
                />
            </View>

            <View style={styleRegister.view}>
                <Ionicons name="lock-closed-outline" size={20} color="#000"/>
                    <TextInput 
                    placeholder="Senha"
                    color={`#a97bff`} 
                    placeholderTextColor={`#000000`}
                />
            </View>

            <TouchableOpacity style={styleRegister.btn} onPress={() => props.navigation.navigate('Login')}>
                <View>
                    <Text style={styleRegister.txtBnt}>Já tenho conta!</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}


const styleRegister = StyleSheet.create(
    {
        imgReg:{
            height: 300,
            width: 300,
        },
        iconTop:{
            alignItems: 'center',
        },
        title:{
            fontSize:30,
            fontWeight:'bold',
            color:'#000000',
            // marginBottom: 20
        },
        txtBnt:{
            color: '#fff',
            fontWeight: 'bold'
        },
        view:{
            alignItems:'center',
            flexDirection:`row`,
            borderBottomWidth: 1,
            marginBottom: 10
        },
        reg2:{
            alignItems:'center',
            flexDirection:`row`,
            justifyContent: 'space-between',
            margin: 20
        },
        imgRegSub:{
            height:30,
            width:30,
            
        },
        linha:{
            borderWidth: 1,
            borderColor: '#8d9296',
            padding: 10,
            paddingLeft: 25,
            paddingRight: 25,
            borderRadius: 20
        },
        txt:{
            textAlign:'center',
            marginTop:10,
            marginBottom: 10
        },
        btn:{
            backgroundColor: '#a97bff',
            padding: 10,
            borderRadius: 50,
            paddingLeft:120,
            paddingRight:120,
            textAlign: 'center',
            flexDirection:'row',
            justifyContent:'space-between'
        }
    }
)