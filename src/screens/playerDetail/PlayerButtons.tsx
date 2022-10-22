import { StyleSheet, View } from 'react-native'
import { Icon } from '@rneui/themed';
import React from 'react'
import { darkTheme } from '../../styles/index';

type PlayerButtonsProps = {
    isPlaying?: boolean
}

const PlayerButtons = ({ isPlaying = true }: PlayerButtonsProps) => {
  return (
    <View
        style={styles.container}>
        <Icon
            name= 'skip-previous'
            type= 'material-community'
            size= {30}
            color= {'#FFF'}/>
        <Icon
            name= {isPlaying ? 'play' : 'pause'}
            type= 'material-community'
            size= {30}
            color= {'#FFF'}
            containerStyle={styles.playPauseButton}/>  
        <Icon
            name= 'skip-next'
            type= 'material-community'
            size= {30}
            color= {'#FFF'}/>   
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
        borderColor: 'rgba(255, 0, 0, 0.4)',
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