import { StyleSheet, View, ImageBackground } from 'react-native'
import { Text } from '@rneui/themed';
import React, { useEffect } from 'react';
import { darkTheme } from 'styles';
import OptionsButtons from './OptionsButtons';
import PlayerButtons from './PlayerButtons';
import PlayerControls from './PlayerControls';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from 'navigation/RootStack';
import { HottestPodcast } from 'screens/discover/models/HomeResponse';

type PlayerDetailProps = NativeStackScreenProps<RootStackParamList, 'PlayerDetail'>

const PlayerDetail = ({
    navigation,
    route: {
      params: hottestPodCast
    }
}: PlayerDetailProps) => {
    const podcast = hottestPodCast as HottestPodcast

    // TODO: Hide TabBar
    useEffect(() => {
        navigation.getParent()?.setOptions({tabBarStyle: {height: 1, display: 'flex'}});
        return () => navigation.getParent()?.setOptions({tabBarStyle: {display: 'flex', backgroundColor: darkTheme.screenBackgroundColor}});
      }, [navigation]);

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