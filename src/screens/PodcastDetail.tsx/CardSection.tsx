import { StyleSheet, View } from 'react-native'
import {Text} from '@rneui/themed';
import React from 'react'
import { darkTheme } from '../../styles/index';

const CardSection = () => {
  return (
    <View
        style={styles.container}>
        <Text
        style={styles.text}>
        In this podcast. I'll explain you how much tools and weapons you can build using advanced techjologies and techiques using dragonglass    
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