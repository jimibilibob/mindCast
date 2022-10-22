import { StyleSheet, ActivityIndicator, ImageBackground, ImageProps, Text, ImageBackgroundProps } from 'react-native'
import {  } from '@rneui/themed';

import React from 'react'

type CustomBackgroundImageProps = {
    uri: string
} & ImageBackgroundProps

const CustomBackgroundImage = ({
    uri,
    children,
    style
}: CustomBackgroundImageProps) => {
  return (
    <ImageBackground 
        source={{ uri }}
        style={[styles.image, style]}
    >
        {children}
    </ImageBackground >
  )
}

export default CustomBackgroundImage

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 1)',
        // opacity: 0.3
    }
})