import { StyleSheet, View, ImageBackground, Dimensions, ViewStyle, Platform } from 'react-native'
import { Text, Slider, Icon } from '@rneui/themed';
import React, { useContext, useState } from 'react';
import { darkTheme } from 'styles';
import AppContext from 'shared/AppContext';

type PlayerFragmentProps = {
    isPlaying?: boolean
    containerStyle?: ViewStyle
} 

const PlayerFragment = ({ isPlaying = true, containerStyle}: PlayerFragmentProps) => {
    const { showPlayerFragment, selectedPodCast } = useContext(AppContext)

    if (!showPlayerFragment) {
        return <></>
    }

    const [value, setValue] = useState(5);
    
    return (
        <View style={[styles.mainContainer, containerStyle]}>
            <Slider
            value={value}
            onValueChange={setValue}
            maximumValue={100}
            minimumValue={0}
            step={1}
            minimumTrackTintColor={'red'}
            maximumTrackTintColor={'rgba(255,255,255, 0.8)'}
            trackStyle={{ height: 3 }}
            thumbStyle={{ height: 3, width: 3, backgroundColor: darkTheme.primaryColor }}
            style={{height: 3}}
            />
            <View
            style={styles.container}>
                <ImageBackground 
                    source={{uri: 'https://s3-sa-east-1.amazonaws.com/mind-cast/images/background-image.jpg'}}
                    resizeMode="cover"
                    style={[styles.cover]}/>
                <View style={styles.podcastTextContainer}>
                    <Text style={styles.podcastTilte}>Getting started with Boxe</Text>
                    <Text style={styles.podcastSubtilte}>Cutting expenses</Text>
                </View>
                <View style={styles.playerControls}>
                    <Icon
                        name= 'skip-previous'
                        type= 'material-community'
                        size= {25}
                        color= {'#FFF'}/>
                    <Icon
                        name= {isPlaying ? 'play' : 'pause'}
                        type= 'material-community'
                        size= {25}
                        color= {'black'}
                        containerStyle={styles.playPauseButton}/>  
                    <Icon
                        name= 'skip-next'
                        type= 'material-community'
                        size= {25}
                        color= {'#FFF'}/>   
                </View>
            </View>
        </View>
        
  )
}

export default PlayerFragment

const styles = StyleSheet.create({
    mainContainer: {
        borderBottomWidth: 1,
        borderBottomColor: darkTheme.navbarColor,
        position: 'absolute',
        width: '100%',
        bottom: Platform.OS == 'android' ? '7%' : '9%',
        zIndex: 100,
        elevation: 10
    },
    container: {
        flexDirection: 'row',
        backgroundColor: darkTheme.screenBackgroundColor,
        alignItems: 'center',
        padding: 10
    },
    podcastTextContainer: {
        flex: 1,
        alignItems: 'flex-start',
        marginHorizontal: 10
    },
    cover: {
        height: 80,
        width: 60,
    },
    podcastTilte: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold'
    },
    podcastSubtilte: {
        textAlign: 'center',
        color: darkTheme.secondaryColorText,
        fontWeight: 'bold'
    },
    playerControls: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    playPauseButton: {
        padding: 10,
        marginHorizontal: 10,
        backgroundColor: '#FFF',
        borderRadius: 40
    },
})