import React, { useState } from "react";
import { Text, View } from "react-native";


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
        <View>
            <Text>Add user</Text>
        </View>
    );
};
export default ListUser;