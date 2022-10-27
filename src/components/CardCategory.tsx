import { StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { Text } from '@rneui/base'
import React, { useContext, useEffect, useState } from 'react'
import { Category } from 'screens/ChooseCategory';
import AppContext from 'shared/AppContext';

type CardCategoryProps = {
    category: Category,
    onPressItem: () => void
}

const CardCategory = ({ category, onPressItem }: CardCategoryProps) => {
    return (
        <TouchableOpacity
            onPress={onPressItem}
            style={{marginVertical: 5}}>
            <ImageBackground 
                source={{uri: category.imageURL}}
                resizeMode="cover"
                imageStyle={{opacity: 0.6}}
                style={category.isSelected ? styles.containerSelected : styles.container}
                >
                <Text h4 style={ styles.text}>{category.title}</Text>
            </ImageBackground >
        </TouchableOpacity>
    )
}

export default CardCategory

const styles = StyleSheet.create({
    container: {
        height: 150,
        justifyContent: 'center'
    },
    containerSelected: {
        height: 150,
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 0, 0, 0.6)'
    },
    text: {
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center'
    }
})