import { StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import Video from 'react-native-video'
import { HottestPodcast } from 'screens/discover/models/HomeResponse'

type PlayerProps = {
    currentPodcast?: HottestPodcast,
    paused: boolean,
    seekValue: number
}

type AudioPlayerProps = {
    setProgressTime: (_: number) => void,
    player: PlayerProps,
    isPlaying: boolean,
    setIsPlaying: (_: boolean) => void
}

const AudioPlayer = ({
    setProgressTime,
    player,
    isPlaying,
    setIsPlaying
}: AudioPlayerProps) => {
    let _soundRef: Video | null = null

    const { seekValue, currentPodcast, paused } = player
    if (!currentPodcast) return <></>


    useEffect(() => {
        _soundRef?.seek(seekValue, 50)
    }, [seekValue])

    return (
    <Video source={{uri: `https://stenio-portifolio-mindcast.herokuapp.com/mind-cast/api/v1/podcasts/${currentPodcast.id}/listen`}}
        onProgress={({currentTime}) => {
            if(isPlaying) {
                setProgressTime(Math.trunc(currentTime))
            }
        }}
        ref={(ref) => {
            _soundRef = ref
        }}
        paused={paused}
        onEnd={() => {
            setIsPlaying(false)
            setProgressTime(0)
        }}
        rate={1.0}
        repeat={isPlaying}
        audioOnly
        ignoreSilentSwitch={'ignore'}
        playInBackground/>
    )
}

export default AudioPlayer