import { StyleSheet, View } from 'react-native'
import { Avatar, Text } from '@rneui/base'
import React from 'react'
import { darkTheme } from '../../styles/index';
import CustomButton from 'components/CustomButton';
import { TrendingAuthor } from './models/HomeResponse';

type CardAuthorProps = {
    trendingAuthor: TrendingAuthor
}

const CardAuthor = ( { trendingAuthor }: CardAuthorProps ) => {
  return (

    <View style={styles.container}>
        <Avatar
            size={60}
            rounded
            source={{ uri: trendingAuthor.profileImageURL }}
        />
        <Text
            style={styles.name}>
            { trendingAuthor.name }
        </Text>
        <Text
            style={styles.podcast}>
            { trendingAuthor.podcasts.length } Podcasts
        </Text>
        <CustomButton
            title={'LEARN MORE'}
            size='md'
            color={darkTheme.primaryColor}
            titleStyle={{fontSize: 15}}/>
    </View>
  )
}

export default CardAuthor

const styles = StyleSheet.create({
    container: {
        width: 140,
        height: 200,
        borderRadius: 10,
        padding: 10,
        margin: 5,
        alignItems: 'center',
        backgroundColor: darkTheme.screenBackgroundColor
    },
    name: {
        paddingTop: 15,
        color: '#FFF',
    },
    podcast: {
        color: '#FFF',
        paddingBottom: 15,
    }
})