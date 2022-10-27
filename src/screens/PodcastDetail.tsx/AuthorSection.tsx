import { StyleSheet, View } from 'react-native'
import { Avatar, FAB, Icon, Text } from '@rneui/themed';
import React from 'react'
import { darkTheme } from '../../styles/index';
import { Author } from 'screens/discover/models/HomeResponse';

type AuthorSectionProps = {
    author: Author
}

const AuthorSection = ({ author }: AuthorSectionProps) => {
  return (
    <View
        style={styles.container}>
        <Avatar
            size={60}
            rounded
            source={{ uri: author.profileImageURL }}
        />
        <Text
            style={styles.text}>
            { author.name }
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