import { StyleSheet, View } from 'react-native'
import { Text } from '@rneui/base'
import React from 'react'

type SubtitleProps = {
  text: string
}

const Subtitle = ({text} : SubtitleProps) => {
  return (
    <View style={styles.container}>
      <Text
        style={styles.text}>{text}</Text>
        <View style={styles.bottomLine} />
    </View>
  )
}

export default Subtitle

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginVertical: 20
    },
    bottomLine: {
      height: 3,
      width: 40,
      backgroundColor: 'red',
      marginTop: 10
    },
    text: {
        fontSize: 20,
        color: '#FFF',
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})