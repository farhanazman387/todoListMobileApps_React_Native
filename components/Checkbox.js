import React, {Component, useState} from 'react'
import { TouchableOpacity } from 'react-native'
import styles from '../styles/styles';

const Checkbox  = () => {

    const [checkboxClicked,setCheckboxClicked] = useState(false)
    return(
        <TouchableOpacity 
        style={checkboxClicked ? styles.checkbox_fill : styles.checkbox_unfill}
        onPress={() => setCheckboxClicked(!checkboxClicked)}>

        </TouchableOpacity>
    );
}
export default Checkbox;