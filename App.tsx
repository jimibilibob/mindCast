import React from 'react';
import {SafeAreaView, StyleSheet, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Signin from './src/screens/Signin';
import ChooseCategory from './src/screens/ChooseCategory';
import CardPodcast from 'screens/discover/CardPodcast';
import Subtitle from 'components/Subtitle';
import Discover from './src/screens/discover/Discover';
import Signup from './src/screens/Signup';
import PodcastDetail from './src/screens/podcastDetail.tsx/PodcastDetail';
import PlayerDetail from 'screens/playerDetail/PlayerDetail';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <Signin/> */}
      <Signup/>
      {/* <ChooseCategory/> */}
      {/* <Discover/> */}
      {/* <PodcastDetail/> */}
      {/* <PlayerDetail/> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 60,
    paddingVertical: 5,
    borderBottomWidth: 0
  },
  icon: {
    paddingHorizontal: 10
  }
});

export default App;
