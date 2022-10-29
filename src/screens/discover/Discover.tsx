import { FlatList, ScrollView, StyleSheet, SafeAreaView, View, ActivityIndicator, Platform, Dimensions } from 'react-native'
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

type DiscoverProps = NativeStackScreenProps<RootStackParamList, 'Discover'>

const Discover = ({navigation}: DiscoverProps) => {
    const [isLoading, setIsLoading] = useState(true)

    const [ homeResponse, setHomeResponse ] = useState<HomeResponse>({hottestPodcasts: [], newReleases: [], trendingAuthors: []})
    const { setIsSignedIn, setCategories, setHasSelectedCategories, showPlayerFragment } = useContext(AppContext)

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
            console.log('SELECTED CATEGORIES', buildParams(selectedCategories))
            const response = await fetch(`https://stenio-portifolio-mindcast.herokuapp.com/mind-cast/api/v1/home?${buildParams(selectedCategories)}`).then( res => res.json() )
            setHomeResponse(response as HomeResponse)
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getPodcasts()
    }, [])

    const onPressPodcast = (podcast: HottestPodcast) => {
        navigation.navigate('PodcastDetail', podcast);
    }

    const buildParams = (categories: Category[]): string => {
        return categories.filter(c => c.isSelected)
        .map(cat => [`categories=${cat.title.toLocaleLowerCase().replace(' ', '-')}`])
        .join('&')
    }

    if (isLoading) {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: darkTheme.screenBackgroundColor}}>
                <ActivityIndicator size="large" color={darkTheme.primaryColor} />
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                style={styles.container}>
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
                    initialNumToRender={3}
                    data={homeResponse.newReleases}
                    renderItem={({item}) => <CardPodcast newRelease={item} onPress={ () => onPressPodcast(item) }/>}/>
                <HeaderSection title='Trending Authors'/>
                <FlatList
                    horizontal
                    initialNumToRender={3}
                    data={homeResponse.trendingAuthors}
                    renderItem={({item}) => <CardAuthor trendingAuthor={item}/>}/>
                <HeaderSection title='Hottest Podcasts'/>
                <FlatList
                    horizontal
                    initialNumToRender={3}
                    data={homeResponse.hottestPodcasts}
                    renderItem={({item}) => <CardHottest hottestPodcast={item} onPress={ () => onPressPodcast(item) }/>}/>
                {showPlayerFragment ? <View style={{ height: 120 }}/> : <></> }
            </ScrollView>
        </SafeAreaView>
    )
}

export default Discover

const styles = StyleSheet.create({
    container: {
        height: Platform.OS == 'ios'
            ? Dimensions.get('window').height - 75
            : Dimensions.get('window').height - 25,
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