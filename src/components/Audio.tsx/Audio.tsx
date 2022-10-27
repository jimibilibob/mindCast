import { StyleSheet } from 'react-native'
import React from 'react'
import Video from 'react-native-video'
import { HottestPodcast } from 'screens/discover/models/HomeResponse'

type PlayerProps = {
    shouldSeekProgressSlider: boolean,
    currentPodcast: HottestPodcast,
    paused: Boolean,
    seekValue: Number
}

type AudioProps = {
    // seekProgressTimerSuccess: () => void,
    // setCurrentTime: any, // GET FROM context then uncomment
    // setPodCast: any, // GET FROM context
    player: PlayerProps,
    isPlaying: boolean // GET FROM context
}

const Audio = ({
    // seekProgressTimerSuccess,
    // setCurrentTime,
    player,
    isPlaying
}: AudioProps) => {
    let _soundRef: Video | null = null
    console.log( "PLAYER ->", player)
    console.log( "isPlaying ->", isPlaying)
    const { shouldSeekProgressSlider, seekValue, currentPodcast, paused } = player   
// 'https://stenio-portifolio-mindcast.herokuapp.com/mind-cast/api/v1/podcasts/5ce742adf8f20c0017107209/listen'
    return (
    <Video source={{uri: `https://stenio-portifolio-mindcast.herokuapp.com/mind-cast/api/v1/podcasts/${currentPodcast.id}/listen`}}
        onProgress={({currentTime}) => {
            if(isPlaying) {
                // setCurrentTime(currentTime)
                console.log('CURRENT TIME', currentTime)
            }
        }}
        ref={(ref) => {
            _soundRef = ref
        }}
        // paused={false}
        // onBuffer={this.onBuffer}      // Callback when remote video is buffering
        // onError={this.videoError}     // Callback when video cannot be loaded
        audioOnly
        ignoreSilentSwitch={'ignore'}
        playInBackground/>
    )
}

export default Audio

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
        marginHorizontal: 40
    }
})