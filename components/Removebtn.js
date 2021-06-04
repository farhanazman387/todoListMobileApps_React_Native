import React from 'react'
import {TouchableOpacity,Text,View} from 'react-native'
import {Component} from 'react'
import styles from '../styles/styles';

const RemoveTaskbtn = (index) =>{

    const removeThisTask = (indexNo) =>{
        
    };
    return (
        <TouchableOpacity key={index} onPress={() => removeThisTask(index)}>
            <Text style={styles.RemoveTaskbtn}>
                x</Text>
        </TouchableOpacity>
    );
};

export default RemoveTaskbtn;