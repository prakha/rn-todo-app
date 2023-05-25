import { ListItem, Icon, Layout, CheckBox, Button } from "@ui-kitten/components";
import {useState} from 'react';
import { StyleSheet } from "react-native";

const TodoItem = ({item}, handleRemoveTodo, handleToggleTodoStatus) => {
    console.log('Remove', handleRemoveTodo);
    console.log('Toggle', handleToggleTodoStatus);
    return (
        <ListItem 
        title={`${item.title}`}
        description={`${item.title}`}
        accessoryRight = {
            <RenderAccessory
                todo={item}
                onToggle={handleToggleTodoStatus}
                onDelete={handleRemoveTodo}
            />
        }
        />

    )
}

const RenderAccessory = ({todo, onToggle, onDelete}) => {
    const [checked, setChecked] = useState(todo.completed);

    const DeleteIcon = (props) => {
        return <Icon {...props} name = 'trash-2-outline'/>

    }

    return (
        <Layout style={styles.container}>
            <Layout style={styles.layout} level="1">
                <CheckBox 
                    checked={checked}
                    onChange={nextChecked => {
                        setChecked(nextChecked)
                        onToggle(todo);
                    }}
                />
            </Layout>
            <Layout style={styles.layout} level="1">
                <Button
                    size='tiny'
                    accessoryLeft ={DeleteIcon}
                    onPress={()=> onDelete(TodoItem)}
                />
            </Layout>
        </Layout>
    )

}

export default TodoItem;

const styles = StyleSheet.create({

    input:{
        flex: 1,
        margin: 2
    },
    rowContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    controlContainer:{
        borderRadius: 4,
        margin: 2,
        padding: 6,
        backgroundColor: '#3366FF',
    },
    button:{

    },
    container:{
        flex: .5,
        flexDirection: 'row'
    },
    layout:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }


});