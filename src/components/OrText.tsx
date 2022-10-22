import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { lightTheme } from '../styles/index';

const OrText = () => {
  return (
    <View style={styles.container}>
        <View style={{flex: 1, height: 1, backgroundColor: '#FFF'}} />
        <View>
            <Text style={{width: 50, textAlign: 'center', color: lightTheme.primaryColor}}>OR</Text>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: '#FFF'}} />
    </View>
  )
}

export default OrText

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
        marginHorizontal: 40
    }
})