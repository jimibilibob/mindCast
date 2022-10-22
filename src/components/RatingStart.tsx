import { StyleSheet, View } from 'react-native'
import {Icon} from '@rneui/themed';
import React from 'react'
import { darkTheme } from 'styles';

const RatingStart = () => {
  return (
    <View
        style={styles.container}>
        {Array.from({ length: 5 }).map( (_, i) => 
        <Icon
            key={i}
            name={i<3 ? 'star' : 'star-o'}
            type='font-awesome'
            size={18}
            style={styles.icon}
            color={darkTheme.yellowColor}/>)}
        
    </View>
  )
}

export default RatingStart

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 5
    },
    icon: {
        paddingLeft: 2
    }
})