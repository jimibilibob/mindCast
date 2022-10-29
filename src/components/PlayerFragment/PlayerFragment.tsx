import { StyleSheet, View, ImageBackground, ViewStyle, Platform, TouchableOpacity } from 'react-native'
import { Text, Icon } from '@rneui/themed';
import React, { useContext } from 'react';
import { darkTheme } from 'styles';
import AppContext from 'shared/AppContext';
import { createNavigationContainerRef } from '@react-navigation/native';
import { RootStackParamList } from 'navigation/RootStack';
import { Slider } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';

export const navigationRef = createNavigationContainerRef<RootStackParamList>()

const PlayerFragment = () => {
    const {
        showPlayerFragment,
        selectedPodCast,
        isPlaying,
        setIsPlaying,
        progressTime
    } = useContext(AppContext)

    if (!showPlayerFragment) {
        return <></>
    }

    const onPlayPause = () => {
        let newValIsPlaying = !isPlaying
        setIsPlaying(newValIsPlaying)
    }

    const onPressPrev = () => {}
    const onNext = () => {}

    const goToPlayerDeatils = () => {
        if (navigationRef.isReady()) {
            navigationRef.navigate('PlayerDetail', selectedPodCast!);
          }
      }
    
    return (
        <View style={styles.mainContainer}>
            <Slider
                value={progressTime}
                maximumValue={selectedPodCast?.durationInSeconds}
                minimumValue={0}
                step={1}
                disabled
                minimumTrackTintColor={'red'}
                maximumTrackTintColor={'rgba(255,255,255, 0.8)'}
                trackStyle={{ height: 3 }}
                thumbStyle={{ height: 3, width: 3, backgroundColor: darkTheme.primaryColor }}
                style={{height: 3, width: '100%'}}/>
            <View
            style={styles.container}>
                <TouchableOpacity
                    onPress={goToPlayerDeatils}
                    style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
                    <ImageBackground 
                        source={{uri: selectedPodCast?.imageURL}}
                        resizeMode="cover"
                        style={[styles.cover]}/>
                    <View style={styles.podcastTextContainer}>
                        <Text style={styles.podcastTilte}>{selectedPodCast?.title}</Text>
                        <Text style={styles.podcastSubtilte}>{selectedPodCast?.author.name}</Text>
                    </View>
                </TouchableOpacity>
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
                        name= {isPlaying ? 'pause' : 'play'}
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
        width: '100%',
        bottom: Platform.OS == 'android' ? '10%' : '12%',
        height: 60,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
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