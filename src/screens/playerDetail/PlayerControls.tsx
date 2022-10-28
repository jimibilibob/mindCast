import { StyleSheet, View } from 'react-native'
import { Slider, Text } from '@rneui/themed';
import React, { useState } from 'react'
import { darkTheme } from '../../styles/index';
import { HottestPodcast } from 'screens/discover/models/HomeResponse';
import { getTimesLabel } from 'lib';

type PlayerControlsProps = {
    setProgressTime: (_: number) => void,
    setSeekValue: (_: number) => void,
    progressTime: number,
    selectedPodcast: HottestPodcast
}

const PlayerControls = ({
    setProgressTime,
    progressTime,
    selectedPodcast,
    setSeekValue
}: PlayerControlsProps) => {

    return (
        <View style={[styles.container]}>
            <Slider
                value={progressTime}
                // onValueChange={setProgressTime}
                maximumValue={selectedPodcast.durationInSeconds}
                onSlidingComplete={(val) => {
                    setSeekValue(val)
                }}
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
                <Text style={{ color: '#FFF', fontWeight: 'bold' }}>{getTimesLabel(progressTime)}</Text>
                <Text style={{ color: '#FFF', fontWeight: 'bold' }}>{getTimesLabel(selectedPodcast.durationInSeconds - progressTime)}</Text>
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
