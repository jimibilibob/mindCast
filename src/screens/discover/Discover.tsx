import { FlatList, ScrollView, StyleSheet, SafeAreaView, View } from 'react-native'
import { Icon, Text } from '@rneui/base'
import React, { useContext, useEffect, useState } from 'react'
import auth from '@react-native-firebase/auth';

import { darkTheme } from '../../styles/index';
import CardPodcast from './CardPodcast';
import CardAuthor from './CardAuthor';
import HeaderSection from './HeaderSection';
import CardHottest from './CardHottest';
import PlayerFragment from 'components/PlayerFragment/PlayerFragment';
import Video from 'react-native-video';
import AppContext from 'shared/AppContext';
import { CATEGORIES, Category } from 'screens/ChooseCategory';
import { getObject, removeItem } from 'lib';
import { StorageConstants } from 'shared/StorageConstants';
import { HomeResponse } from './models/HomeResponse';

const Discover = () => {
    let player

    const [ homeResponse, setHomeResponse ] = useState<HomeResponse>({hottestPodcasts: [], newReleases: [], trendingAuthors: []})
    const { setIsSignedIn, setCategories, setHasSelectedCategories } = useContext(AppContext)

    const signOut = async () => {
        try {
            await removeItem(StorageConstants.categories)
            await removeItem(StorageConstants.hasSelectedCategories)
        } catch (error) {
            console.log(error)
        } finally {
            auth().signOut()
            setIsSignedIn(false)
            setCategories(CATEGORIES),
            setHasSelectedCategories(false)
        }
    }

    const getPodcasts = async () => {
        try {
            const selectedCategories = (await getObject(StorageConstants.categories)) as Array<Category>;
            const response = await fetch('https://stenio-portifolio-mindcast.herokuapp.com/mind-cast/api/v1/home?categories=science&categories=history').then( res => res.json() )
            setHomeResponse(response as HomeResponse)
            console.log('PodCasts', (response as HomeResponse))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPodcasts()
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.container}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text
                    h3
                    style={styles.title}>
                    Discover
                </Text>
                <Icon
                    name={'sign-out'}
                    type='font-awesome'
                    size={25}
                    style={styles.signOut}
                    color={'#FFF'}
                    onPress={signOut}
                    />
            </View>
            <HeaderSection title='New Releases'/>
            <FlatList
                horizontal
                data={homeResponse.newReleases}
                renderItem={({item}) => <CardPodcast newRelease={item}/>}/>
            <HeaderSection title='Trending Authors'/>
            <FlatList
                horizontal
                data={homeResponse.trendingAuthors}
                renderItem={({item}) => <CardAuthor trendingAuthor={item}/>}/>
            <HeaderSection title='Hottest Podcasts'/>
            <FlatList
                horizontal
                data={homeResponse.hottestPodcasts}
                renderItem={({item}) => <CardHottest hottestPodcast={item}/>}/>
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
    },
    signOut: {
        color: '#FFF',
        marginHorizontal: 10
    }
})