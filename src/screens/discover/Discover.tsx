import { FlatList, ScrollView, StyleSheet, SafeAreaView, View } from 'react-native'
import { Icon, Text } from '@rneui/base'
import React, { useContext, useEffect, useState } from 'react'
import auth from '@react-native-firebase/auth';

import { darkTheme } from '../../styles/index';
import CardPodcast from './CardPodcast';
import CardAuthor from './CardAuthor';
import HeaderSection from './HeaderSection';
import CardHottest from './CardHottest';
import AppContext from 'shared/AppContext';
import { CATEGORIES, Category } from 'screens/ChooseCategory';
import { getObject, removeItem } from 'lib';
import { StorageConstants } from 'shared/StorageConstants';
import { HomeResponse, HottestPodcast } from './models/HomeResponse';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from 'navigation/RootStack';
import Video from 'react-native-video';

type DiscoverProps = NativeStackScreenProps<RootStackParamList, 'Discover'>

const Discover = ({navigation}: DiscoverProps) => {
    let player

    const [ homeResponse, setHomeResponse ] = useState<HomeResponse>({hottestPodcasts: [], newReleases: [], trendingAuthors: []})
    const { setIsSignedIn, setCategories, setHasSelectedCategories, setShowPlayerFragment } = useContext(AppContext)

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
            setShowPlayerFragment(false)
        }
    }

    const getPodcasts = async () => {
        try {
            const selectedCategories = (await getObject(StorageConstants.categories)) as Array<Category>;
            const response = await fetch('https://stenio-portifolio-mindcast.herokuapp.com/mind-cast/api/v1/home?categories=science&categories=history').then( res => res.json() )
            setHomeResponse(response as HomeResponse)
            // console.log('PodCasts', (response as HomeResponse))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPodcasts()
    }, [])

    const onPressPodcast = (podcast: HottestPodcast) => {
        navigation.navigate('PodcastDetail', podcast);
    }

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
                    renderItem={({item}) => <CardPodcast newRelease={item} onPress={ () => onPressPodcast(item) }/>}/>
                <HeaderSection title='Trending Authors'/>
                <FlatList
                    horizontal
                    data={homeResponse.trendingAuthors}
                    renderItem={({item}) => <CardAuthor trendingAuthor={item}/>}/>
                <HeaderSection title='Hottest Podcasts'/>
                <FlatList
                    horizontal
                    data={homeResponse.hottestPodcasts}
                    renderItem={({item}) => <CardHottest hottestPodcast={item} onPress={ () => onPressPodcast(item) }/>}/>
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