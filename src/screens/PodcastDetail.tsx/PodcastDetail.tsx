import { StyleSheet, View, ImageBackground } from 'react-native'
import { Text, FAB } from '@rneui/base'
import React from 'react'
import { darkTheme } from '../../styles/index';
import CustomButton from 'components/CustomButton';
import CardSection from './CardSection';
import AuthorSection from './AuthorSection';
import TitleSection from './Subtitle';
import RatingStart from '../../components/RatingStart';

const PodcastDetail = () => {
  return (
    <View style={styles.container}>
      <View>
      <View
          style={styles.header}>
          <ImageBackground 
            source={{uri: 'https://s3-sa-east-1.amazonaws.com/mind-cast/images/background-image.jpg'}}
            resizeMode="cover"
            style={[styles.cover]}/>
          <View
            style={styles.infoContainer}>
            <Text
                style={styles.title}>
                Freeing dragons
            </Text>
            <RatingStart/>
            <CustomButton
              title={'#philosofy'}
              color={darkTheme.navbarColor}
              size='md'/>
          </View>
        </View>
        <View
          style={styles.buttonsHeader}>
          <CustomButton
            title={'PLAY'}
            color={darkTheme.primaryColor}
            />
          <CustomButton
            title={'ADD TO PLAYLIST'}
            color={darkTheme.screenBackgroundColor}
            style={{borderColor: '#FFF', borderWidth: 1.5, marginHorizontal: 10}}/>
          <View style={{flex: 1}}/>
          <FAB
            visible={true}
            icon={{ name: 'clouddownloado', type: 'ant-design', color: darkTheme.secondaryColorText }}
            color='#FFF'
          />
        </View>
      </View>
      <TitleSection/>
      <CardSection/>
      <TitleSection/>
      <AuthorSection/>
    </View>
  )
}

export default PodcastDetail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkTheme.screenBackgroundColor,
    padding: 10
  },
  header: {
    flexDirection: 'row'
  },
  buttonsHeader: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  cover: {
    width: 100,
    height: 150
  },
  infoContainer: {
    paddingHorizontal: 10,
    justifyContent: 'center'
  },
  title: {
      color: '#FFF',
      fontSize: 18,
      fontWeight: 'bold'
  }
})