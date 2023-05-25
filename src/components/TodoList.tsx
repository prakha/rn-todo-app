import React from 'react';

import {useEffect} from 'react';

import { Divider, List, Spinner, TopNavigation, Text} from '@ui-kitten/components';
import { createTodo, deleteTodo, loadTodos, updateTodo } from '../service/todoService';
import TodoItem from './TodoItem';
import { StyleSheet, View} from 'react-native';
import TodoForm from './TodoForm';




const TodoList = () => {

    const [refreshing, setRefreshing] = React.useState(false);
    const [todos, setTodos] = React.useState([]);
 
    const handleFormSubmit = (todo) => {
        console.log('Todo to create', todo);
        createTodo(todo).then((todo) => onRefresh());
    };

    const hamndleRemoveTodo = (todo) => {
        console.log('Todo to remove', todo);
        deleteTodo(todo.id).then((todo) => onRefresh());
    };

    const handleToggleTodoStatus = (todo) => {
        console.log('Todo to toggle', todo);
        todo.completed = !todo.completed;
        updateTodo(todo).then((todo) => {
            onRefresh()
        });
        
    }



    const refresh = async () => {
        await loadTodos().then((todos) => {
            setTodos(todos);
            console.log(todos);
        }) 
    }

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        refresh().then(() => setRefreshing(false));
        console.log('refreshing state', refresh);
    }, [refreshing]);

    
    useEffect(() => {
        refresh();
    }, [onRefresh]);

    return(
        <>
            <TopNavigation title = 'Codebrains Todo' alignment = 'center'/>
            <Divider/>
            <TodoForm onFormSubmit={handleFormSubmit}/>
            <Divider/>
            {
                refreshing ? (
                    <Spinner/>
                ) : (
                    <>
                        {
                            todos.length > 0  ? (<List data={todos}
                                                        
                                                        renderItem={(item) => TodoItem(item, handleFormSubmit, handleToggleTodoStatus) }/>) : (<Text>No todos found</Text>)
                        }
                    
                    </>
                )
            }
        </>
    )
}

const styles = StyleSheet.create({
    input:{
        flex: 1,
        margin: 2,
    },
    rowContainer:{  
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    controlContainer: {
        borderRadius: 4,
        margin: 2,
        padding: 6,
        backgroundColor: '#3366FF',
    },
    separator:{
        height: 1,
        backgroundColor: '#ccccccc'
    }

}
   
);


export default TodoList;