import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import Todo from './Todo';

export default class Main extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            todoArray: [],
            todoText: ''
        }   
    }
render() {
    
    let todos = this.state.todoArray.map((val, key) => {
            return <Todo key={key} keyval={key} val={val}
        delete={ () => this.deleteTodo(key)} />
        });

return (
    <View style={styles.container}>
        
        <View style={styles.header} >
            <Text style={styles.headerText}> Todo List </Text>
        </View>

        <View>
            <TextInput 
                onChangeText={(todoText) => {this.setState({todoText})}} 
                value={this.state.todoText}
                style={styles.textInput} 
                placeholder='What do you want to do!?'>
            </TextInput>
        </View>

        <View style={styles.alignment}>
            <TouchableOpacity style={styles.theAddButton}>
                <Text 
                    onPress={() => this.addTodo()}
                    style={styles.theAddButtonText}>ADD</Text>
            </TouchableOpacity>
        </View>

        <ScrollView style={styles.scrollContainer}>
            {todos}
            
        </ScrollView>

</View>
);
}

addTodo = () => {
    if(this.state.todoText){
        this.state.todoArray.push({
            'note': this.state.todoText
        });
        this.setState({todoArray: this.state.todoArray});
        this.setState({todoText: ''});
    }    
}

deleteTodo(key){
  this.state.todoArray.splice(key, 1)
  this.setState({ todoArray: this.state.todoArray })
}
}

const styles = {
container: {
flex: 1,
backgroundColor:'white'
},

header: {
backgroundColor: '#77a7f4',
alignItems: 'center',
justifyContent: 'center',
height: 50
},

headerText: {
color: 'white',
fontWeight: '900'
},

scrollContainer: {
    flex: 1,
    marginBottom: 100
},

textInput: {
    borderBottomWidth: 0.5
},

theAddButton: { 
    backgroundColor:'#58595b',
    justifyContent:'center',
    width: 100,
    height: 40,
    borderRadius: 17,
    alignItems: 'center'
},

theAddButtonText: {
    color: 'white',
    fontWeight: '900'
},
alignment:{
    alignItems: 'center'
}
}