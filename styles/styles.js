import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    main_text: {
        color: '#079992',
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    line: {
        borderBottomWidth: 1,
        borderColor:'#079992',
    },
    todoItem: {
        fontSize:20,
        fontWeight:'300',
        margin: 20,
        color: '#079992',
    },
    todo_wrapper: {
        flexDirection: 'row',
        padding: 10,
    },
    checkbox: {
        marginLeft: 20,
        marginTop: 20,
        height: 20,
        width: 20,
        borderColor: '#079992',
        borderWidth: 1,
    },
    task_input: {
        marginLeft: 20,
        fontSize: 16,
        width: 350,
    },
    task_add_button: {
        fontSize:25,
        color: '#079992'
    },
  });

  export default styles;