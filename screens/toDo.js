import moment from 'moment';
import React, { useState } from 'react'
import {View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity} from 'react-native'
import TodoItem from '../components/TodoItem';
import styles from '../styles/styles';

const Todo=() =>{
    var currentDate = moment().format("dddd, Do MMM");
    
    const [taskAdd, setTask] = useState();
    const [taskAddItem, setTaskItem] = useState([]);

    const handleAddTask = () => {
        setTaskItem([...taskAddItem,taskAdd]),setTask(null);
    };
    return(
    <View>
        <View>
            <Text style={styles.main_text}>{currentDate}</Text>
            <View style={styles.line}></View>
            {taskAddItem.map((item) => {
                return <TodoItem Text={item}/>;
            })}
        </View>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <View style={styles.todo_wrapper}>
                <TextInput style={styles.task_input} placeholder="Add your task here..."
                    onChangeText={(text) => setTask(text)}/>
                <TouchableOpacity onPress={()=> handleAddTask()}>
                    <Text style={styles.task_add_button}>+</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    </View>
    );
};

export default Todo;