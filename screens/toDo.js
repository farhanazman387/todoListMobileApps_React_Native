import moment from 'moment';
import React, { useState } from 'react'
import {View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, Keyboard} from 'react-native';
import RemoveTaskbtn from '../components/Removebtn';
import TodoItem from '../components/TodoItem';
import styles from '../styles/styles';

const Todo=() =>{
    var currentDate = moment().format("dddd, Do MMM");
    
    const [taskAdd, setTask] = useState();
    const [taskAddItem, setTaskItem] = useState([]);

    const handleAddTask = () => {
        Keyboard.dismiss();
        setTaskItem([...taskAddItem,taskAdd])
        setTask(null);
    };

    const completedTask = (index) => {
        let taskCopy = [...taskAddItem];
        taskCopy.splice(index,1);
        setTaskItem(taskCopy);
    };

    return(
    <View>
        <View>
            <Text style={styles.main_text}>{currentDate}</Text>
            <View style={styles.line}></View>

            <View>
                <Text style={styles.main_text_title}>Today's Task</Text>
            </View>
            <View style={styles.item_task}>
                {taskAddItem.map((item, index) => {
                    return (
                        // <TouchableOpacity key={index}  onPress={() => completedTask(index)}>
                        //     <TodoItem Text={item}/>
                        // </TouchableOpacity>
                        <TodoItem Text={item} TouchableOpacity={index}/>
                    );
                    
                })}
            </View>
        </View>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <View style={styles.addTask_wrapper}>
                <TextInput style={styles.task_input} placeholder="Add your task here..."
                    onChangeText={(text) => setTask(text)}/>
                <TouchableOpacity onPress={()=> handleAddTask()}>
                    <View style={styles.task_add_button}>
                        <Text style={styles.task_add_btn_text}>+</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    </View>
    );
};

export default Todo;