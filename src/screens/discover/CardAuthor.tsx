import { StyleSheet, View } from 'react-native'
import { Avatar, Text } from '@rneui/base'
import React from 'react'
import { darkTheme } from '../../styles/index';
import CustomButton from 'components/CustomButton';

const CardAuthor = () => {
  return (

    <View style={styles.container}>
        <Avatar
            size={60}
            rounded
            source={{ uri: 'https://cdn.pixabay.com/photo/2014/09/17/20/03/profile-449912__340.jpg' }}
        />
        <Text
            style={styles.name}>
            Ragnar Lothbrok
        </Text>
        <Text
            style={styles.podcast}>
            7 Podcasts
        </Text>
        <CustomButton
            title={'LEARN MORE'}
            size='md'
            color={darkTheme.primaryColor}/>
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