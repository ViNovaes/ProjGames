import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome6';

export default props => {
    return(
        <View style={{flex:1, marginLeft: 20, marginRight: 20, alignItems:'center', justifyContent:'space-around'}}>
            <Text style={styleInicial.title}>GAMEON</Text>
                
                <Image style={styleInicial.img} source={require('./img/begin.png')}/>
            <View>
                <TouchableOpacity style={styleInicial.btn} onPress={() => props.navigation.navigate('Login')}>
                    <Text style={styleInicial.txtBnt}>Entrar agora!</Text>
                    <Icon name='angle-right' size={15} color='#fff' />
                </TouchableOpacity>
            </View>
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
            paddingTop: 20,
            paddingBottom: 20,
            borderRadius: 50,
            paddingLeft:120,
            paddingRight:120,
            textAlign: 'center',
            flexDirection:'row',
            justifyContent:'space-between'
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