import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Main from './components/Main'
import Todo from './components/Todo';
import Login from './components/Login';
import {createStackNavigator, createNavigationContainer} from 'react-navigation'

const Navigator = createStackNavigator({
    Login : Login,
    Main : Main
  },
  {
    initialRouteName : "Login"
  }
)

const Application = createNavigationContainer(Navigator)

export default class App extends React.Component {
render() {
return (
  <Application/>
);
}
}