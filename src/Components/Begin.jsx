import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome6';

export default props => {
    return(
        <View style={{flex:1, alignItems:'center', justifyContent: 'space-between', marginTop:75, marginBottom:50}}>
            <Text style={styleInicial.title}>GAMEON</Text>

                <Image style={styleInicial.img} source={require('./img/begin.png')}/>

                <TouchableOpacity style={styleInicial.btn} onPress={() => props.navigation.navigate('Login')}>
                    <Text style={styleInicial.txtBnt}>Entrar agora!</Text>
                    <Icon name='angle-right' size={15} color='#fff'/>
                </TouchableOpacity>
        </View>
    )
}

const styleInicial = StyleSheet.create(
    {
        img:{
            height: 200,
            width: 350,
        },
        btn:{
            backgroundColor: '#a97bff',
            padding: 10,
            borderRadius: 50,
            paddingLeft:140,
            paddingRight:140,
            alignItems:'center',
            flexDirection:'row',
            justifyContent:'space-around'
        },
        teste:{
            alignItems:'center',
            flexDirection:'row',
            justifyContent:'space-around'
        },
        txtBnt:{
            color: '#fff',
            fontWeight: 'bold'
        },
        title:{
            fontSize:30,
            fontWeight:'bold',
            color:'#000000',
            
        },
        
    }
)