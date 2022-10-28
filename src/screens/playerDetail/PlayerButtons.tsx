import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Icon } from '@rneui/themed';
import React from 'react'
import { darkTheme } from '../../styles/index';

type PlayerButtonsProps = {
    onPlayPause: () => void,
    onPressPrev: () => void,
    onNext: () => void,
    isPlaying: boolean
}

const PlayerButtons = ({
    onPlayPause,
    onPressPrev,
    onNext,
    isPlaying }: PlayerButtonsProps) => {
    return (
        <View
            style={styles.container}>
            <TouchableOpacity
            onPress={onPressPrev}>
                <Icon
                name= 'skip-previous'
                type= 'material-community'
                size= {30}
                color= {'#FFF'}/>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={onPlayPause}>
                <Icon
                    name= {isPlaying ? 'pause' : 'play'}
                    type= 'material-community'
                    size= {30}
                    color= {'#FFF'}
                    containerStyle={styles.playPauseButton}/>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={onNext}>
                <Icon
                name= 'skip-next'
                type= 'material-community'
                size= {30}
                color= {'#FFF'}/>  
            </TouchableOpacity>
        </View>
    )
}

export default PlayerButtons

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    playPauseButton: {
        borderWidth: 10,
        borderColor: 'rgba(239, 1, 11, 0.2)',
        padding: 10,
        backgroundColor: darkTheme.primaryColor,
        borderRadius: 40
    },
    icon: {
        minWidth: 0,
        minHeight: 0,
        padding: 0,
        margin: 0,
    },
    text: {
        color: '#fff',
        padding: 10
    }
})