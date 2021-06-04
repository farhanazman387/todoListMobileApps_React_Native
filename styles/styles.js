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
        // textAlign: 'center',
        width:'100%',
        margin: 20,
    },
    main_text_title: {
        // color: '#079992',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'left',
        width: '100%',
        margin: 20,
    },
    line: {
        borderBottomWidth: 1,
        borderColor:'#079992',
    },
    todoItem: {
        fontSize:20,
        fontWeight:'400',
        margin: 20,
        color: '#079992',
        width:'65%',
    },
    todo_wrapper: {
        flexDirection: 'row',
        padding: 10,
        width: '100%',
    },
    addTask_wrapper: {
        flexDirection: 'row',
        padding: 10,
        width: '100%',
        position: 'absolute',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#f1f2f6',
        // borderRadius:15,
    },
    item_task: {
        flexWrap: 'wrap',
    },
    task_wrapper: {
        width: '100%',
        backgroundColor: '#dfe6e9',
        flexDirection: 'row',
        borderRadius: 10,
        flexWrap: 'wrap',
    },
    checkbox_fill: {
        // height: 10,
        // width: 10,
        padding: 5,
        backgroundColor: '#079992',
    },
    checkbox_unfill: {
        padding:5,
    },
    checkbox: {
        marginLeft: 22,
        marginTop: 22,
        height: 20,
        width: 20,
        borderColor: '#079992',
        borderWidth: 2,
        alignItems:'center',
        justifyContent:'center',
    },
    circular_btn: {
        marginLeft: 20,
        marginTop: 25,
        height: 15,
        width: 15,
        borderColor: '#079992',
        borderRadius: 7,
        borderWidth: 3,
        
    },
    task_input: {
        marginLeft: 20,
        fontSize: 16,
        width: 250,
        borderRadius: 60,
    },
    task_add_button: {
        borderRadius: 10,
        width:25,
        height:30,
    },
    task_add_btn_text: {
        fontSize:26,
        color: '#079992',
        paddingBottom:10,
        paddingLeft: 5,
    },
    RemoveTaskbtn:{
        fontSize:25,
        fontWeight:'bold',
        margin: 20,
        textAlign:'right',
        color: '#079992',
    },
  });

  export default styles;