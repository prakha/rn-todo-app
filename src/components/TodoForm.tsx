import { Button, Input, Layout, Text } from "@ui-kitten/components";
import  React ,{ useState } from "react";
import { StyleSheet, View } from "react-native";


const TodoForm = ({ onFormSubmit}) =>{
    const [value, setValue] = useState("");
    const handleSubmit = () => {
        onFormSubmit({
            title: value,
            completed: false,
        });
        setValue("");

    };

    return(
        <Layout style={styles.rowContainer} level = "1">
            <Input
            style = {styles.input}
            status='basic'
            placeholder='Add todo'
            onChangeText={nextValue => setValue(nextValue)}

            />
            <View style = {styles.controlContainer}>
                <Button size='tiny' onPress  ={handleSubmit}>
                    Submit
                </Button>

            </View>

        </Layout>
    )

};

const styles = StyleSheet.create({
    input: {
        flex: 1,
        margin: 2,
    },
    rowContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    controlContainer: {
        borderRadius: 4,
        margin: 2,
        padding: 6,
        backgroundColor: '#3366FF',
    }

});

export default TodoForm;