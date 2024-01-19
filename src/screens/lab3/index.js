import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import Input from '../../components/input/input1';
import Button from '../../components/button/button';
import Button2 from '../../components/button/button2';
const MyLab3 = () => {
  return (
    <View style = {styles.container}>
      <Text style = {{backgroundColor : 'green'}}>lab3</Text>

      <Text style = {styles.title}>lab3</Text>

      <Input></Input>

      <Button></Button>

      <Button2 title="Button2"></Button2>
    </View>
  ) ;
};

export default MyLab3;
