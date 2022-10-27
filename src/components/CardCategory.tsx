import { StyleSheet, TouchableHighlight, ImageBackground } from 'react-native';
import { Text } from '@rneui/base'
import React, { useContext, useEffect, useState } from 'react'
import { Category } from 'screens/ChooseCategory';
import AppContext from 'shared/AppContext';

type CardCategoryProps = {
    category: Category,
    onPressItem: () => void
}

const CardCategory = ({ category, onPressItem }: CardCategoryProps) => {
    // const { selectedCategories, setSelectedCategories } = useContext(AppContext)
    // const [ isSelected, setIsSelected ] = useState(category.isSelected)
    
    // const onPress = () => {
    //     setIsSelected(true)
    // }

    // const updateCategories = () => {
    //     if (isSelected && selectedCategories.filter( item => item.title == category.title).length > 0) return
    //     if (isSelected) {
    //         setSelectedCategories([category, ...selectedCategories])
    //     } else {
    //         const filteredCategories = selectedCategories.filter((item) => item.title != category.title)
    //         setSelectedCategories([...filteredCategories])
    //     }
    //     console.log('PRESSED CATEGORY', isSelected)
    // }

    // useEffect(()=> {
    //     updateCategories()
    // }, [isSelected])

    return (
        <TouchableHighlight
            underlayColor="rgba(255, 0, 0, 0.6)" // Red opacity, when is selected
            onPress={ () => {}}
            style={{marginVertical: 5}}
            onPressIn={onPressItem}>
            <ImageBackground 
                source={{uri: category.imageURL}}
                resizeMode="cover"
                imageStyle={{opacity: 0.6}}
                style={category.isSelected ? styles.containerSelected : styles.container}
                >
                <Text h4 style={ styles.text}>{category.title}</Text>
            </ImageBackground >
        </TouchableHighlight>
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