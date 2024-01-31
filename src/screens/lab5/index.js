import React from "react";
import { ImageBackground, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

const Lab5 = () => {
    return (
        <View style = {styles.container}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
            <ImageBackground
                source={require('../../assets/images/bgr.jpg')}
                style = {styles.image}>
                    <View style={styles.details}>
                        <Text style={styles.text}>
                            <Text style={styles.firstLine}> Discover {'\n'}</Text>
                            <Text style={styles.secondline}> world with us </Text>
                        </Text>

                        <Text style={styles.textStyle}> Discover  world with us </Text>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}> Get Started </Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>  
        </View>
    );
};

export default Lab5;