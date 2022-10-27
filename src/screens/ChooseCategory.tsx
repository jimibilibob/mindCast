import { StyleSheet, View, ScrollView } from 'react-native';
import React, { useContext } from 'react'
import { Icon, Text } from '@rneui/base'
import { darkTheme } from '../styles/index';
import CardCategory from '../components/CardCategory';
import AppContext from 'shared/AppContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import { storeObject } from 'lib';
import { StorageConstants } from 'shared/StorageConstants';

const ChooseCategory = () => {

  const { categories, setCategories, setHasSelectedCategories } = useContext(AppContext)
  // console.log('categories', categories)

  const saveCategories = async () => {
    await storeObject(StorageConstants.categories, categories)
    await storeObject(StorageConstants.hasSelectedCategories, true)
    setHasSelectedCategories(true)
  }

  const onPressCategory = (index: Number) => {
    let modifiedCategories = categories.map( (category, i) => {
      if (index == i) {
        return {
          isSelected: category.isSelected ? false : true,
          imageURL: category.imageURL,
          title: category.title
        }
      }
      return category
    })
    setCategories([...modifiedCategories])
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Icon
            style={{flex: 1}}
            name='check'
            type= 'font-awesome'
            size= {25}
            color= {darkTheme.navbarColor}/>
        <Text
            style={styles.text}>Your Interests</Text>
        <Icon
            style={{flex: 1, justifyContent: 'center', 
            marginRight: 10}}
            name='check'
            type= 'font-awesome'
            size= {25}
            color= {'#FFF'}
            onPress={saveCategories}/>
      </View>
      <Text
        h4
        style={styles.messageText}>
        Choose the topics that you're interested in.
      </Text>
      <ScrollView style={{paddingHorizontal: 12}}>
        {categories.map( (category, i) => <CardCategory key={ i } category={category} onPressItem={() => onPressCategory(i)}/>)}
      </ScrollView>
    </SafeAreaView>
  )
}

export default ChooseCategory

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: darkTheme.screenBackgroundColor
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: darkTheme.navbarColor,
        height: 40
    },
    text: {
        flex: 2,
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    messageText: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#fff',
        marginVertical: 10
    }
})

export const CATEGORIES: Array<Category> = [
  {
    isSelected: true,
    title: 'ALL',
    imageURL:
      'https://s3-sa-east-1.amazonaws.com/mind-cast/images/categories/all/all.jpg',
  },
  {
    isSelected: false,
    title: 'TECHNOLOGY',
    imageURL:
      'https://s3-sa-east-1.amazonaws.com/mind-cast/images/categories/technology/big.jpg',
  },
  {
    isSelected: false,
    title: 'PHILOSOFY',
    imageURL:
      'https://s3-sa-east-1.amazonaws.com/mind-cast/images/categories/philosofy/big.jpg',
  },
  {
    isSelected: false,
    title: 'SCIENCE',
    imageURL:
      'https://s3-sa-east-1.amazonaws.com/mind-cast/images/categories/science/big.jpeg',
  },
  {
    isSelected: false,
    title: 'BUSINESS',
    imageURL:
      'https://s3-sa-east-1.amazonaws.com/mind-cast/images/categories/business/big.jpg',
  },
  {
    isSelected: false,
    title: 'POP CULTURE',
    imageURL:
      'https://s3-sa-east-1.amazonaws.com/mind-cast/images/categories/pop-culture/big.jpg',
  },
  {
    isSelected: false,
    title: 'HISTORY',
    imageURL:
      'https://s3-sa-east-1.amazonaws.com/mind-cast/images/categories/history/big.jpg',
  },
];

export type Category = {
  isSelected: boolean,
  imageURL: string,
  title: string,
}