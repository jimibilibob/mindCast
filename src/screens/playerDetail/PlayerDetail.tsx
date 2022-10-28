import { StyleSheet, View, ImageBackground, Platform } from 'react-native'
import { Text } from '@rneui/themed';
import React, { useContext, useEffect } from 'react';
import { darkTheme } from 'styles';
import OptionsButtons from './OptionsButtons';
import PlayerButtons from './PlayerButtons';
import PlayerControls from './PlayerControls';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from 'navigation/RootStack';
import { HottestPodcast } from 'screens/discover/models/HomeResponse';
import AppContext from 'shared/AppContext';

type PlayerDetailProps = NativeStackScreenProps<RootStackParamList, 'PlayerDetail'>

const PlayerDetail = ({
    navigation,
    route: {
      params: hottestPodCast
    }
}: PlayerDetailProps) => {
    const {
        setShowPlayerFragment,
        selectedPodCast,
        setSelectedPodCast,
        isPlaying,
        setIsPlaying,
        progressTime,
        setProgressTime,
        setSeekValue
    } = useContext(AppContext)
    const podcast = hottestPodCast as HottestPodcast

    useEffect(() => {
        setShowPlayerFragment(false)
        setSelectedPodCast(podcast)
        setIsPlaying(true)
        return () => {
            setShowPlayerFragment(true)
        }
    }, [])

    useEffect(() => {
        navigation.setOptions({title: '#'+hottestPodCast.category, headerTitleStyle: {fontWeight: 'bold'}})
        navigation.getParent()?.setOptions({tabBarStyle: {height: 1, display: 'flex', backgroundColor: darkTheme.screenBackgroundColor}});
        return () => {
            navigation.getParent()?.setOptions({tabBarStyle: {display: 'flex', backgroundColor: darkTheme.screenBackgroundColor}})
        };
      }, []);

    const onPlayPause = () => {
        setIsPlaying(isPlaying ? false : true)
    }

    const onPressPrev = () => {}
    const onNext = () => {}

    const actions = {
        onPlayPause,
        onPressPrev,
        onNext
    }

    return (
        <View
            style={styles.container}>
            <ImageBackground 
                source={{uri: podcast.thumbnailImageURL}}
                resizeMode="cover"
                blurRadius={10}
                style={[styles.container]}>
                <View style={styles.content}>
                    <ImageBackground 
                        source={{uri: podcast.imageURL}}
                        resizeMode="cover"
                        style={[styles.cover]}/>
                    <Text style={styles.podcastTilte}>{ podcast.author.name }</Text>
                    <Text h4 style={styles.podcastSubtilte}>{ podcast.title }</Text>
                    <PlayerControls
                        setSeekValue={setSeekValue}
                        selectedPodcast={podcast}
                        progressTime={progressTime}
                        setProgressTime={setProgressTime}/>
                <PlayerButtons {...actions} isPlaying={isPlaying && podcast.id == selectedPodCast?.id } />
                </View>
                <OptionsButtons/>
            </ImageBackground> 
        </View>
    )
}

export default PlayerDetail

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: Platform.OS == 'android' ? '100%' : '105%' // TODO: Check it later, manage it with hooks
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