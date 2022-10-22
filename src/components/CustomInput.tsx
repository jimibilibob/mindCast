import {StyleSheet} from 'react-native';
import {Input, Icon, InputProps} from '@rneui/themed';

import React from 'react';
import { darkTheme } from '../styles/index';

type CustomInputProps = {
  placeholder: string,
  iconName: string,
  type?: 'normal' | 'password',
} & InputProps

const CustomInput = ({
  style,
  placeholder,
  iconName,
  type = 'normal'
}: CustomInputProps) => {
  return (
    <Input
      containerStyle={{paddingHorizontal: 0}}
      inputContainerStyle={styles.inputContainer}
      placeholder={placeholder}
      placeholderTextColor= {darkTheme.secondaryColorText}
      style={style}
      secureTextEntry= { type == 'password' }
      leftIcon={
        <Icon
          name={iconName}
          type='feather'
          size={22}
          style={styles.icon}
          onPress={() => console.log('hello')} />
      }/>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputContainer: {
    paddingVertical: 5,
    borderBottomWidth: 0,
    backgroundColor: '#fff',
    borderRadius: 5
  },
  icon: {
    paddingHorizontal: 10
  }
});
