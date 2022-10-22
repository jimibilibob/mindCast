import { FlatList, ScrollView, StyleSheet, View } from 'react-native'
import { Text } from '@rneui/base'
import React from 'react'
import { darkTheme } from '../../styles/index';
import CardPodcast from './CardPodcast';
import CardAuthor from './CardAuthor';
import HeaderSection from './HeaderSection';
import CardHottest from './CardHottest';
import PlayerFragment from 'components/PlayerFragment/PlayerFragment';

const Discover = () => {
  return (
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
    </ScrollView>
  )
}

export default Discover

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: darkTheme.navbarColor
    },
    title: {
        color: '#FFF',
        marginLeft: 10,
        marginTop: 10
    }
})