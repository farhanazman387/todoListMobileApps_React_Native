import React from 'react'
import {View, Text} from 'react-native'
import styles from '../styles/styles';

const TodoItem=(taskItem) =>{
    return(
        <View style={styles.todo_wrapper}>
            <View style={styles.checkbox}></View>
            <Text style={styles.todoItem}>
                {taskItem.Text}
            </Text>
        </View>
    );
};

//dont forget semicolon too, crucial in javascript
//dont forget to export
export default TodoItem;