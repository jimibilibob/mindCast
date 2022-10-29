import { StyleSheet, View, ImageBackground, ScrollView, Dimensions } from 'react-native'
import { Text, FAB } from '@rneui/base'
import React, { useContext, useEffect } from 'react'
import { darkTheme } from '../../styles/index';
import CustomButton from 'components/CustomButton';
import CardSection from './CardSection';
import AuthorSection from './AuthorSection';
import TitleSection from './Subtitle';
import RatingStart from '../../components/RatingStart';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from 'navigation/RootStack';
import { HottestPodcast } from 'screens/discover/models/HomeResponse';
import AppContext from 'shared/AppContext';

type PodcastDetailProps = NativeStackScreenProps<RootStackParamList, 'PodcastDetail'>

const PodcastDetail = ({
  navigation,
  route: {
    params: hottestPodCast
  }
}: PodcastDetailProps) => {
  const { selectedPodCast } = useContext(AppContext)
  // console.log('IS SHOWING', selectedPodCast)
  const podcast = hottestPodCast as HottestPodcast

  const goToPlayerDeatils = () => {
    navigation.navigate('PlayerDetail', podcast);
  }

  useEffect(()=>{
    navigation.setOptions({title: 'Podcast Detail', headerTitleStyle: {fontWeight: 'bold'}})
  }, [])

  return (
      <ScrollView style={styles.container}>
        <View>
          <View
              style={styles.header}>
              <ImageBackground 
                source={{uri: podcast.imageURL}}
                resizeMode="cover"
                style={[styles.cover]}/>
              <View
                style={styles.infoContainer}>
                <Text
                    style={styles.title}>
                    { podcast.title }
                </Text>
                <RatingStart startsAmount={podcast.stars}/>
                <View style={{flexDirection: 'row'}}>
                  <CustomButton
                    title={'#'+podcast.category}
                    color={darkTheme.navbarColor}
                    size='md'
                    />
                    <View style={{flex: 1}}/>
                </View>
              </View>
            </View>
          <View
            style={styles.buttonsHeader}>
            <CustomButton
              title={'PLAY'}
              color={darkTheme.primaryColor}
              onPress={goToPlayerDeatils}
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
        <TitleSection title='Description'/>
        <CardSection text={podcast.description}/>
        <TitleSection title='Author'/>
        <AuthorSection author={podcast.author}/>
      {selectedPodCast ? <View style={{ minHeight: 150 }}/> : <></> }
      </ScrollView>
  )
}

export default PodcastDetail

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('screen').height,
    backgroundColor: darkTheme.screenBackgroundColor,
    padding: 10
  },
  header: {
    flexDirection: 'row'
  },
  buttonsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15
  },
  cover: {
    width: 100,
    height: 150
  },
  infoContainer: {
    paddingHorizontal: 10,
    width: '70%',
    fontWeight: 'bold',
    justifyContent: 'center'
  },
  title: {
      color: '#FFF',
      fontSize: 18,
      fontWeight: 'bold'
  }
})