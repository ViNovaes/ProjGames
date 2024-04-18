import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from "react-native";
import Lock from 'react-native-vector-icons/Ionicons';
import Email from 'react-native-vector-icons/MaterialIcons';



export default props => {
    return(
        <View style={{flex:1, marginLeft: 20, marginRight: 20}}>
            <View style={styleLogin.iconTop}>
                <Image style={styleLogin.imgIni} source={require('./img/login.png')}/>
            </View>
            <Text style={styleLogin.title}>Login</Text>

            <View style={styleLogin.view}>
                <Email name="alternate-email" size={20} color="#000"/>
                    <TextInput 
                    style={styleLogin.input}
                    placeholder="Email"
                    color={`#a97bff`} 
                    placeholderTextColor={`#000000`}
                />
            </View>

            <View style={styleLogin.view}>
                <Lock name="lock-closed-outline" size={20} color="#000"/>
                    <TextInput 
                    style={styleLogin.input}
                    placeholder="Senha"
                    color={`#a97bff`} 
                    placeholderTextColor={`#000000`}
                />
            </View>

            <TouchableOpacity style={(styleLogin.btn)} onPress={() => props.navigation.navigate('')}>
                <View style={styleLogin.teste}>
                    <Text style={styleLogin.txtBnt}>Entrar agora!</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styleLogin.btn} onPress={() => props.navigation.navigate('Registrar')}>
                <View style={styleLogin.teste}>
                    <Text style={styleLogin.txtBnt}>Criar conta</Text>
                </View>
            </TouchableOpacity>

            <Text style={styleLogin.txt}>Ou faça login com...</Text>
            <View style={styleLogin.login2}>
                <View style={styleLogin.linha}>
                    <Image style={styleLogin.imgLogin} source={require('./img/google.png')}/>
                </View>
                <View style={styleLogin.linha}>
                    <Image style={styleLogin.imgLogin} source={require('./img/facebook.png')}/>
                </View>
                <View style={styleLogin.linha}>
                    <Image style={styleLogin.imgLogin} source={require('./img/twitter.png')}/>
                </View>
            </View>



        </View>

        
    )
}

const styleLogin = StyleSheet.create(
    {
        imgIni:{
            height: 300,
            width: 300,
        },
        iconTop:{
            alignItems: 'center',
        },
        view:{
            alignItems:'center',
            flexDirection:`row`,
            borderBottomWidth: 1,
            marginBottom: 10
        },
        icon: {
            
            
        },
        btn:{
            backgroundColor: '#a97bff',
            padding: 17,
            borderRadius: 50,
            paddingLeft: 50,
            paddingRight:50,
            alignItems:'center',
            marginLeft: 20,
            marginRight: 20,
            marginTop: 20
        },
        txtBnt:{
            color: '#fff',
            fontWeight: 'bold'
        },
        title:{
            fontSize:30,
            fontWeight:'bold',
            color:'#000000',
            marginBottom: 20
        }, 
        login2:{
            alignItems:'center',
            flexDirection:`row`,
            justifyContent: 'space-between',
            margin: 20
        },
        imgLogin:{
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
            marginTop:10
        }
    }
)