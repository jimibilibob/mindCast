import { FlatList, ScrollView, StyleSheet, SafeAreaView } from 'react-native'
import { Text } from '@rneui/base'
import React from 'react'
import { darkTheme } from '../../styles/index';
import CardPodcast from './CardPodcast';
import CardAuthor from './CardAuthor';
import HeaderSection from './HeaderSection';
import CardHottest from './CardHottest';
import PlayerFragment from 'components/PlayerFragment/PlayerFragment';
import Video from 'react-native-video';

const Discover = () => {
    let player
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.container}>
        <Text
            h3
            style={styles.title}>
            Discover
        </Text>
        <HeaderSection/>
        <FlatList
            horizontal
            data={Array.from({ length: 20 })}
            renderItem={(item) => <CardPodcast/>}/>
        <HeaderSection/>
        <FlatList
            horizontal
            data={Array.from({ length: 20 })}
            renderItem={(item) => <CardAuthor/>}/>
        <HeaderSection/>
        <FlatList
            horizontal
            data={Array.from({ length: 20 })}
            renderItem={(item) => <CardHottest/>}/>
        <PlayerFragment/>
        <Video source={{uri: 'https://stenio-portifolio-mindcast.herokuapp.com/mind-cast/api/v1/podcasts/5ce742adf8f20c0017107209/listen'}}   // Can be a URL or a local file.
            ref={(ref) => {
                player = ref
            }}                                      // Store reference
            // onBuffer={this.onBuffer}                // Callback when remote video is buffering
            // onError={this.videoError}               // Callback when video cannot be loaded
            audioOnly
            ignoreSilentSwitch={'ignore'}
            playInBackground // To play in background
            style={styles.backgroundVideo} />
    </ScrollView>
    </SafeAreaView>
  )
}

export default Discover

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: darkTheme.navbarColor,
    },
    title: {
        color: '#FFF',
        marginLeft: 10,
        marginTop: 10
    },
    backgroundVideo: {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      }
})