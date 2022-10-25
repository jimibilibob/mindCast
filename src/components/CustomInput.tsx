import {StyleSheet} from 'react-native';
import {Input, Icon, InputProps} from '@rneui/themed';

import React from 'react';
import { Controller, Control, FieldValues, RegisterOptions, FieldPath } from 'react-hook-form';
import { darkTheme } from '../styles/index';

type CustomInputProps = {
  placeholder: string,
  iconName: string,
  type?: 'normal' | 'password',
  control?: Control<FieldValues, any> | undefined,
  name: string,
  rules?: Omit<RegisterOptions<FieldValues, FieldPath<FieldValues>>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
} & InputProps

const CustomInput = ({
  style,
  placeholder,
  iconName,
  type = 'normal',
  control,
  name,
  rules = {}
}: CustomInputProps) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={ ({field: {value, onChange, onBlur}, fieldState: {error}}) =>
      
        <Input
          containerStyle={{paddingHorizontal: 0}}
          inputContainerStyle={styles.inputContainer}
          placeholder={placeholder}
          placeholderTextColor= {darkTheme.secondaryColorText}
          style={[style, error ? {borderBottomColor: 'red', borderBottomWidth: 1} : {}]}
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
          secureTextEntry= { type == 'password' }
          leftIcon={
            <Icon
              name={iconName}
              type='feather'
              size={22}
              style={styles.icon}
              onPress={() => console.log('hello')} />
          }/>
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
