import React, { useState } from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import styles from '../styles/styles';
// import Checkbox from './Checkbox';
import CheckboxClass from './CheckboxClass';
import RemoveTaskbtn from './Removebtn';

const TodoItem=(taskItem, index) =>{
    return(
        <View style={styles.todo_wrapper}>
            <View style={styles.task_wrapper}>
                <View style={styles.checkbox}>
                    {/* <Checkbox/> */}
                    <CheckboxClass />
                </View>
                <Text style={styles.todoItem}>
                    {taskItem.Text}
                </Text>
                <RemoveTaskbtn TouchableOpacity={index}/>
            </View>
            
        </View>
    );
};

//dont forget semicolon too, crucial in javascript
//dont forget to export
export default TodoItem;