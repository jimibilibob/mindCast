import { StyleSheet, View, ImageBackground } from 'react-native'
import { Avatar, Text } from '@rneui/base'
import React from 'react'
import { darkTheme } from '../../styles/index';

const CardPodcast = () => {
  return (
    <ImageBackground 
            source={{uri: 'https://s3-sa-east-1.amazonaws.com/mind-cast/images/background-image.jpg'}}
            resizeMode="cover"
            imageStyle={{opacity: 0.6}}
            style={[styles.container]}
            >
            <View style={styles.content}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Avatar
                  size={30}
                  rounded
                  source={{ uri: 'https://cdn.pixabay.com/photo/2014/09/17/20/03/profile-449912__340.jpg' }}
                />
                <Text
                  style={styles.author}>
                  Ragnar Lothbrok
                </Text>
              </View>
              <View style={{flex: 1}}></View>
              <View>
                <Text
                  style={styles.title}>
                  Empowering your children
                </Text>
                <Text
                  style={styles.category}>
                  #philosofy
                </Text>
              </View>
            </View>
      </ImageBackground >
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