import { StyleSheet, View } from 'react-native'
import {Icon} from '@rneui/themed';
import React from 'react'
import { darkTheme } from '../../styles/index';
import Subtitle from 'components/Subtitle';

const TitleSection = () => {
  return (
    <View
        style={styles.container}>
        <Subtitle/>
        <></>
    </View>
  )
}

export default TitleSection

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5
    },
    icon: {
        paddingLeft: 2
    }
})