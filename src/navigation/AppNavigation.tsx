import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { RootStackParamList } from './RootStack';
import Discover from 'screens/discover/Discover';
import AppContext from 'shared/AppContext';
import { darkTheme } from 'styles';
import Signup from 'screens/Signup';
import Signin from 'screens/Signin';
import { ActivityIndicator } from 'react-native';

const Tab = createBottomTabNavigator<RootStackParamList>();

const SignedScreens = () => {

    return (
        <>
          <Tab.Screen
              name="Discover"
              component={Discover}
              options={{
                  headerShown: false,
              }} />
          <Tab.Screen
              name="Search"
              component={Discover}
              options={{
                  headerStyle: {
                      backgroundColor: darkTheme.navbarColor,
                  }
              }} />
          <Tab.Screen
              name="Library"
              component={Discover}
              options={{
                  headerStyle: {
                      backgroundColor: darkTheme.navbarColor,
                  }
              }} />
          <Tab.Screen
              name="Settings"
              component={Discover}
              options={{
                  headerStyle: {
                      backgroundColor: darkTheme.navbarColor,
                  }
              }} />
        </>
    )
}

const AnonymousScreens = () => {

  return (
    <>
      <Tab.Screen name="SignIn" component={Signin} options={{headerShown: false, tabBarStyle: {display: 'none'}}} />
      <Tab.Screen name="SignUp" component={Signup} options={{headerShown: false, tabBarStyle: {display: 'none'}}} />
    </>
  )
}

const AppNavigation = () => {
  const { isSignedIn, isLoading } = useContext(AppContext);

  if (isLoading) {
    return <ActivityIndicator size={'large'} color={darkTheme.primaryColor} />;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator>
        {isSignedIn ? SignedScreens() : AnonymousScreens()}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
