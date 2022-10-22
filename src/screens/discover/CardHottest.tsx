import { StyleSheet, View, ImageBackground } from 'react-native'
import { Avatar, Text } from '@rneui/base'
import React from 'react'
import RatingStart from 'components/RatingStart';
import { darkTheme } from 'styles';

const CardHottest = () => {
  return (
    <ImageBackground 
            source={{uri: 'https://s3-sa-east-1.amazonaws.com/mind-cast/images/background-image.jpg'}}
            resizeMode="cover"
            imageStyle={{opacity: 0.6}}
            style={[styles.container]}
            >
            <View style={styles.content}>
                <RatingStart/>
                <View style={{flex: 1, justifyContent: 'center'}}>
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

export default CardHottest

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
  title: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 15
  },
  category: {
    color: darkTheme.primaryColor,
    fontWeight: 'bold'
  },
})