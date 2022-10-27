import { StyleSheet } from 'react-native'
import {Button, ButtonProps} from '@rneui/themed';

import React from 'react'

type CustomButtonProps = {
    title: string;
    color: string;
    iconName?: string;
    iconColor?: string;
    onPress?: () => void
} & ButtonProps

const CustomButton = ({
    title,
    color,
    iconName,
    iconColor = '#fff',
    size = "lg",
    style,
    titleStyle,
    onPress = () => {}
}: CustomButtonProps) => {
  return (
    <Button
        title={title}
        titleStyle={titleStyle}
        iconPosition='right'
        color={color}
        size={size}
        onPress={onPress}
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