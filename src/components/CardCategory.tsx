import { StyleSheet, TouchableHighlight, ImageBackground } from 'react-native';
import { Text } from '@rneui/base'
import React from 'react'

const CardCategory = () => {
  return (
    <TouchableHighlight
        underlayColor="rgba(255, 0, 0, 0.6)" // Red opacity, when is selected
        onPress={ () => {}}
        style={{marginVertical: 5}}>
        <ImageBackground 
            source={{uri: 'https://s3-sa-east-1.amazonaws.com/mind-cast/images/background-image.jpg'}}
            resizeMode="cover"
            imageStyle={{opacity: 0.6}}
            style={[styles.container]}
            >
            <Text h4 style={styles.text}>ALL</Text>
        </ImageBackground >
    </TouchableHighlight>
  )
}

export default CardCategory

const styles = StyleSheet.create({
    container: {
        height: 150,
    },
    text: {
        flex: 1,
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center'
    }
})