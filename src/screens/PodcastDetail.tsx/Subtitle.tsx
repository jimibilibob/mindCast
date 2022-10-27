import { StyleSheet, View } from 'react-native'
import React from 'react'
import Subtitle from 'components/Subtitle';

type TitleSectionProps = {
  title: string
}

const TitleSection = ({title}: TitleSectionProps) => {
  return (
    <View
        style={styles.container}>
        <Subtitle text={title}/>
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