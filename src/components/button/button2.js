import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { stylesBut } from "./stylesBut";

const Button2 = ({title/*, onPress*/}) => {
    return(
        <TouchableOpacity style = {stylesBut.button} /*onPress={onPress}*/>
            <Text>{title}</Text>
        </TouchableOpacity>
    );
};
export default React.memo(Button2);