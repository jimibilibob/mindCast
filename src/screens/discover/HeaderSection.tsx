import { StyleSheet, View } from 'react-native'
import React from 'react'
import { darkTheme } from '../../styles/index';
import CustomButton from 'components/CustomButton';
import Subtitle from 'components/Subtitle';

type HeaderSectionProps = {
  title: string
}

const HeaderSection = ({ title }: HeaderSectionProps) => {
  return (
    <View style={styles.container}>
        <Subtitle text={title}/>
        <CustomButton
            title={'SEE ALL'}
            size='md'
            color={darkTheme.primaryColor}/>
    </View>
  )
}

export default HeaderSection

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginVertical: 20
    }
})