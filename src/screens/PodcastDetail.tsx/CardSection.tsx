import { StyleSheet, View } from 'react-native'
import {Text} from '@rneui/themed';
import React from 'react'
import { darkTheme } from '../../styles/index';

type CardSectionProps = {
  text: string
}

const CardSection = ({text}: CardSectionProps) => {
  return (
    <View
        style={styles.container}>
        <Text
        style={styles.text}>
        {text} 
        </Text>        
    </View>
  )
}

export default CardSection

const styles = StyleSheet.create({
    container: {
        backgroundColor: darkTheme.navbarColor
    },
    text: {
        color: '#fff',
        padding: 10
    }
})