import { StyleSheet, View } from 'react-native'
import { Slider, Text } from '@rneui/themed';
import React, { useState } from 'react'
import { darkTheme } from '../../styles/index';

const PlayerControls = () => {
    const [value, setValue] = useState(0);

    return (
        <View style={[styles.container]}>
            <Slider
                value={value}
                onValueChange={setValue}
                maximumValue={68}
                minimumValue={0}
                step={1}
                allowTouchTrack
                minimumTrackTintColor={'red'}
                maximumTrackTintColor={'rgba(250,250,250,0.15)'}
                trackStyle={{ height: 3 }}
                thumbStyle={{ height: 15, width: 15, backgroundColor: darkTheme.primaryColor }}
                style={{height: 20, marginHorizontal: 15}}
            />
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{ color: '#FFF', fontWeight: 'bold' }}>{value}:30</Text>
                <Text style={{ color: '#FFF', fontWeight: 'bold' }}>{value}:60</Text>
            </View>
        </View>
    )
}

export default PlayerControls

const styles = StyleSheet.create({
    container: {
        padding: 10,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'stretch',
    }
})
