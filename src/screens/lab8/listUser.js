import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { styles } from "./styles";


const ListUser = ({navigation}) => {
    const [data, setData] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [selecttedUser, setSelectedUser] = useState(undefined);

    const getAPI = async () => {
        const url = 'http://10.0.2.2:3000/users';
        let result = await fetch(url);
        result = await result.json();
        if(result){
            setData(result);
        }
    };

    const handleDelete = async id => {
        const url = 'http://10.0.2.2:3000/users';
        let result = await fetch('$(url)/$(id)',{
            method: 'Delete',
        });
        result = await result.json();

        if (result) {
            getAPI
        }
    };

    const handleUpdate = data => {
        //
    };

    React.useEffect(() => {
        const focusHandle = navigation.addListener('focus', () =>{
            getAPI();
        });
        return focusHandle;
    }, [navigation]);

    return(
        <ScrollView>
            <TouchableOpacity
             style={styles.buttonNew}
             onPress={() => navigation('AddUser')}>
                <Text style={styles.buttonNew}>Add New</Text>
             </TouchableOpacity>

             {data.length
              ? data.map((item, index) =>(
                <View style={styles.container} key={index}>
                    <View style={styles.containerText}>
                        <Text style={styles.name}> {item.name} </Text>
                        <Text style={styles.birthday}> {item.birthday} </Text>
                    </View>
                    <View style={styles.containerButton}>
                        <TouchableOpacity style={styles.button}>
                            <Text onPress={() => handleUpdate(item)}>
                                update
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text onPress={() => handleDelete(item.id)}>
                                delete
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
              ))
            : null}
        </ScrollView>
    );
};
export default ListUser;