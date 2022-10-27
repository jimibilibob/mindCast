import { StyleSheet, View, ImageBackground, TouchableOpacity } from 'react-native'
import { Avatar, Text } from '@rneui/base'
import React from 'react'
import { darkTheme } from '../../styles/index';
import { HottestPodcast } from './models/HomeResponse';

type CardPodcastProps = {
  newRelease: HottestPodcast,
  onPress: () => void
}

const CardPodcast = ({ newRelease, onPress }: CardPodcastProps) => {
  return (
    <TouchableOpacity
      onPress={ () => {}}
      style={{marginVertical: 5}}
      onPressIn={onPress}>
      <ImageBackground 
              source={{uri: newRelease.imageURL}}
              resizeMode="cover"
              imageStyle={{opacity: 0.6}}
              style={[styles.container]}
              >
              <View style={styles.content}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Avatar
                    size={30}
                    rounded
                    source={{ uri: newRelease.author.profileImageURL }}
                  />
                  <Text
                    style={styles.author}>
                    { newRelease.author.name }
                  </Text>
                </View>
                <View style={{flex: 1}}></View>
                <View>
                  <Text
                    style={styles.title}>
                    { newRelease.title }
                  </Text>
                  <Text
                    style={styles.category}>
                    #{newRelease.category}
                  </Text>
                </View>
              </View>
        </ImageBackground >
      </TouchableOpacity>
  )
}

export default CardPodcast

const styles = StyleSheet.create({
  container: {
    height: 250,
    width: 200,
    borderRadius: 10,
    marginLeft: 10
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
  },
  author: {
    color: '#FFF',
    paddingLeft: 8
  },
  title: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold'
  },
  category: {
    color: darkTheme.primaryColor,
    fontWeight: 'bold'
  },
})