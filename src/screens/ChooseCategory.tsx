import { StyleSheet, View, ScrollView } from 'react-native';
import React from 'react'
import { Icon, Text } from '@rneui/base'
import { darkTheme } from '../styles/index';
import CardCategory from '../components/CardCategory';

const ChooseCategory = () => {
  return (
    <View style={styles.container}>
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
            color= {'#FFF'}/>
      </View>
      <Text
        h4
        style={styles.messageText}>
        Choose the topics that you're interested in.
      </Text>
      <ScrollView style={{marginHorizontal: 12}}>
        {Array.from({ length: 20 }).map( (_, i) => <CardCategory key={ i }/>)}
      </ScrollView>
    </View>
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
        justifyContent: 'center',
        alignContent: 'center',
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