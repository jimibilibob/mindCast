import React from 'react';
import { StyleSheet } from 'react-native';

import AppContext from 'shared/AppContext';
import AppNavigation from 'navigation/AppNavigation';
import { useApp } from 'hooks';
import { darkTheme } from 'styles';

const App = () => {

  const app = useApp();

  return (
    <AppContext.Provider value={app}>
        <AppNavigation />
    </AppContext.Provider>
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
