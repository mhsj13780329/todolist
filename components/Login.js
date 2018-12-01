import React, {Component} from 'react'
import {View, TextInput, TouchableOpacity, Text, Image, ToastAndroid} from 'react-native'

export default class Login extends React.Component{

    constructor(props){
        super(props)
        this.state= {
            username: '',
            password: ''
        }
    }
    
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Image style={styles.image} source={require('../logo/download.jpg')} />
                    <Text style={styles.text}>
                        made using React Native
                    </Text>
                </View>

                <View style={styles.alignment}>

                    <TextInput 
                        style={styles.input} 
                        placeholder='Username'
                        onChangeText={ (text) => this.setState({username: text}) }>
                    </TextInput>

                    <TextInput style={styles.input} 
                        placeholder='Password' 
                        secureTextEntry
                        onChangeText={ (text) => this.setState({password: text})}>
                    </TextInput>

                    <TouchableOpacity 
                        onPress={() => this.loginUser()} 
                        style={styles.loginButton}>
                        <Text style={styles.loginText}>LOGIN</Text>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }

    loginUser = () => {
        if(this.state.username === 'admin' && this.state.password === '123456'){
            this.props.navigation.navigate("Main")
        }
        else{
            ToastAndroid.show('Wrong username or password', ToastAndroid.SHORT)
        }
    }

}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#565555'
    },
    input: {
        alignItems: 'center',
        width: 300,
        height: 50,
        backgroundColor: 'white' ,
        marginBottom: 20,
        textAlign: 'center',
        borderRadius: 30
    },
    loginButton: {
        width: 300,
        alignItems: 'center',
        backgroundColor: '#37d3be',
        height: 50,
        borderRadius: 30    
    },
    loginText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: '800',
        marginTop: 14 
    },
    logo: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center', 
        flexDirection: 'column',
        marginBottom: 20
    },
    image: {
        width: 100,
        height: 100,
    },
    text: {
        marginTop: 10,
        color: 'white',
        width: 200,
        textAlign: 'center',
        opacity: 0.9,
        //marginTop = 1,
        marginBottom: 1
    },
    alignment: {
        alignItems: 'center',
        marginBottom: 30
    }
}