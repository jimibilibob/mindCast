import { StyleSheet, View, ImageBackground, TouchableOpacity } from 'react-native'
import { Text } from '@rneui/base'
import React from 'react'
import RatingStart from 'components/RatingStart';
import { darkTheme } from 'styles';
import { HottestPodcast } from './models/HomeResponse';

type CardHottestProps = {
  hottestPodcast: HottestPodcast,
  onPress: () => void
}

const CardHottest = ({ hottestPodcast, onPress }: CardHottestProps) => {
  return (
    <TouchableOpacity
      onPress={ onPress }
      style={{marginVertical: 5}}>
      <ImageBackground 
        source={{uri: hottestPodcast.imageURL}}
        resizeMode="cover"
        imageStyle={{opacity: 0.6}}
        style={[styles.container]}
        >
        <View style={styles.content}>
            <RatingStart startsAmount={hottestPodcast.stars}/>
            <View style={{flex: 1, justifyContent: 'center'}}>
                <Text
                style={styles.title}>
                { hottestPodcast.title }
                </Text>
                <Text
                style={styles.category}>
                #{hottestPodcast.category}
                </Text>
            </View>
        </View>
      </ImageBackground >
    </TouchableOpacity>
    
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