import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';

import AppContext from 'shared/AppContext';
import AppNavigation from 'navigation/AppNavigation';
import { useApp } from 'hooks';
import { darkTheme } from 'styles';

const App = () => {

  const app = useApp();

  const SharedLoading = () => {
    if (app.isBusy) {
      return <ActivityIndicator size={'large'} color={darkTheme.primaryColor} />;
    }

    return null;
  }

  return (
    <AppContext.Provider value={app}>
        <AppNavigation />
        <SharedLoading />
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
