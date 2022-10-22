import { StyleSheet, View } from 'react-native'
import { Icon } from '@rneui/themed';
import React from 'react'

const OptionsButtons = () => {
  return (
    <View
        style={styles.container}>
        <Icon
            name= 'shuffle'
            type= 'feather'
            size= {30}
            color= {'#FFF'}/>
        <Icon
            name= 'repeat-off'
            type= 'material-community'
            size= {30}
            color= {'#FFF'}/>  
        <Icon
            name= 'clouddownloado'
            type= 'ant-design'
            size= {30}
            color= {'#FFF'}/>  
        <Icon
            name= 'playlist-plus'
            type= 'material-community'
            size= {30}
            color= {'#FFF'}/>      
    </View>
  )
}

export default OptionsButtons

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 30

    }
})