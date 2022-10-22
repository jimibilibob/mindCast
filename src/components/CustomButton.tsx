import { StyleSheet } from 'react-native'
import {Button, ButtonProps} from '@rneui/themed';

import React from 'react'

type CustomButtonProps = {
    title: string;
    color: string;
    iconName?: string;
    iconColor?: string;
} & ButtonProps

const CustomButton = ({
    title,
    color,
    iconName,
    iconColor = '#fff',
    size = "lg",
    style
}: CustomButtonProps) => {
  return (
    <Button
        title={title}
        iconPosition='right'
        color={color}
        size={size}
        icon={iconName ? {
            name: iconName,
            type: 'font-awesome',
            size: 25,
            color: iconColor,
            iconStyle: {marginHorizontal: 5}
          } : <></>}
        containerStyle={[styles.container, style]}/>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    container: {
        borderRadius: 5
    }
})