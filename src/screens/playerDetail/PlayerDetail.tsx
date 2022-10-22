import { StyleSheet, View, ImageBackground } from 'react-native'
import { Text, Slider, Icon } from '@rneui/themed';
import React, { useState } from 'react';
import { darkTheme } from 'styles';
import OptionsButtons from './OptionsButtons';
import PlayerButtons from './PlayerButtons';
import PlayerControls from './PlayerControls';

const PlayerDetail = () => {
    

  return (
    <View
        style={styles.container}>
        <ImageBackground 
            source={{uri: 'https://s3-sa-east-1.amazonaws.com/mind-cast/images/background-image.jpg'}}
            resizeMode="cover"
            blurRadius={10}
            style={[styles.container]}>
            <View style={styles.content}>
                <ImageBackground 
                    source={{uri: 'https://s3-sa-east-1.amazonaws.com/mind-cast/images/background-image.jpg'}}
                    resizeMode="cover"
                    style={[styles.cover]}/>
                <Text style={styles.podcastTilte}>Thanos</Text>
                <Text h4 style={styles.podcastSubtilte}>Cutting expenses in half in a snap of fingers</Text>
                <PlayerControls/>
            <PlayerButtons/>
            </View>
            <OptionsButtons/>
        </ImageBackground> 
    </View>
  )
}

export default PlayerDetail

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        flex: 1,
        alignItems: 'center',
        margin: 10
    },
    cover: {
        height: 250,
        width: 250,
        marginVertical: 20
    },
    podcastTilte: {
        color: darkTheme.primaryColor,
        fontSize: 18,
        fontWeight: 'bold'
    },
    podcastSubtilte: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: 'bold',
        marginHorizontal: 30
    }
})