import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class Todo extends React.Component {

    render() {
return (
<View key={this.props.keyval} style={styles.todo}>

    <Text style={styles.todoText}>{this.props.val.note}</Text>

    <TouchableOpacity onPress={this.props.delete} style={styles.deleteButton}>
        <Text style={styles.deleteText}>delete</Text>
    </TouchableOpacity>

</View>
    );
    }   
}
const styles = {
todo: {
    position: 'relative',
    padding: 10,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderBottomColor: 'black',
} ,
todoText: {
    paddingLeft: 10,
},
deleteButton: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10,
},
deleteText: {
    color: 'red'
},
};