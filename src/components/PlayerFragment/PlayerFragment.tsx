import { StyleSheet, View, ImageBackground, Dimensions, ViewStyle, Platform, TouchableOpacity } from 'react-native'
import { Text, Slider, Icon } from '@rneui/themed';
import React, { useContext, useState } from 'react';
import { darkTheme } from 'styles';
import AppContext from 'shared/AppContext';

type PlayerFragmentProps = {
    containerStyle?: ViewStyle
} 

const PlayerFragment = ({
    containerStyle
}: PlayerFragmentProps) => {
    const { showPlayerFragment, selectedPodCast, isPlaying, setIsPlaying } = useContext(AppContext)

    if (!showPlayerFragment) {
        return <></>
    }

    const onPlayPause = () => {
        let newValIsPlaying = !isPlaying
        setIsPlaying(newValIsPlaying)
    }

    const onPressPrev = () => {}
    const onNext = () => {}

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
                    source={{uri: selectedPodCast?.imageURL}}
                    resizeMode="cover"
                    style={[styles.cover]}/>
                <View style={styles.podcastTextContainer}>
                    <Text style={styles.podcastTilte}>{selectedPodCast?.title}</Text>
                    <Text style={styles.podcastSubtilte}>{selectedPodCast?.author.name}</Text>
                </View>
                <View style={styles.playerControls}>
                <TouchableOpacity
                    onPress={onPressPrev}>
                    <Icon
                        name= 'skip-previous'
                        type= 'material-community'
                        size= {25}
                        color= {'#FFF'}/>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={onPlayPause}>
                    <Icon
                        name= {isPlaying ? 'play' : 'pause'}
                        type= 'material-community'
                        size= {25}
                        color= {'black'}
                        containerStyle={styles.playPauseButton}/>  
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={onNext}>
                    <Icon
                        name= 'skip-next'
                        type= 'material-community'
                        size= {25}
                        color= {'#FFF'}/>   
                </TouchableOpacity>
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