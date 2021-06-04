import React from 'react'
import { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import styles from '../styles/styles';

class CheckboxClass extends Component{
    state = {
        checkboxClicked : false,
    }

    _ClickedCheckBox = () => {
        this.setState({
            checkboxClicked: !this.state.checkboxClicked,
        })
    }

    render(){
        return(
            <TouchableOpacity 
            style={this.state.checkboxClicked ? styles.checkbox_fill : styles.checkbox_unfill}
            onPress={() => this._ClickedCheckBox()}>
            </TouchableOpacity>
        );
    }
}

export default CheckboxClass;