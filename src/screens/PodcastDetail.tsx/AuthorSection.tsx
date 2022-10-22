import { StyleSheet, View } from 'react-native'
import { Avatar, FAB, Icon, Text } from '@rneui/themed';
import React from 'react'
import { darkTheme } from '../../styles/index';

const AuthorSection = () => {
  return (
    <View
        style={styles.container}>
        <Avatar
            size={60}
            rounded
            source={{ uri: 'https://cdn.pixabay.com/photo/2014/09/17/20/03/profile-449912__340.jpg' }}
        />
        <Text
            style={styles.text}>
            Ragnar Lothbrok
        </Text>
        <Text
        style={{flex: 1}}>
        
        </Text>
        <FAB
            visible={true}
            icon={{ name: 'search', type: 'font-awesome', color: '#FFF' }}
            color={darkTheme.screenBackgroundColor}
          />   
    </View>
  )
}

export default AuthorSection

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: darkTheme.navbarColor
    },
    text: {
        color: '#fff',
        padding: 10
    }
})