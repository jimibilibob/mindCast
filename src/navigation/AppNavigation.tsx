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
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChooseCategory from 'screens/ChooseCategory';
import { Icon } from '@rneui/base';

const Tab = createBottomTabNavigator<RootStackParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

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
      <Stack.Screen name="SignIn" component={Signin} options={{headerShown: false}} />
      <Stack.Screen name="SignUp" component={Signup} options={{headerShown: false}} />
      <Stack.Screen
              name="ChooseCategory"
              component={ChooseCategory}
              options={{
                  headerShown: false,
              }} />
    </>
  )
}

const AppNavigation = () => {
  const { isSignedIn, isLoading, hasSelectedCategories } = useContext(AppContext);
  console.log('hasSelectedCategories', hasSelectedCategories)

  if (isLoading) {
    return <ActivityIndicator size={'large'} color={darkTheme.primaryColor} />;
  }

  if (isSignedIn && hasSelectedCategories) {
    return (
      <NavigationContainer>
        <Tab.Navigator screenOptions={ ({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName = '';
            let type = 'font-awesome'
            let iconColor = focused ? darkTheme.primaryColor : '#FFF'
            switch (route.name) {
              case 'Discover':
                iconName = 'compass'
                break;
              case 'Search':
                iconName = 'search'
                break;
              case 'Library':
                iconName = 'music-box-multiple'
                type = 'material-community'
                break;
              case 'Settings':
                iconName = 'gear'
                break;
              default:
                break;
            }
            return <Icon
              name= {iconName}
              type= {type}
              size= {25}
              color= {iconColor}
            />
          },
          tabBarStyle: {
            backgroundColor: darkTheme.screenBackgroundColor
          },
          tabBarActiveTintColor: darkTheme.primaryColor,
          tabBarInactiveTintColor: '#FFF',
        })}>
          {true ? SignedScreens() : SignedScreens()}
        </Tab.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {true ? AnonymousScreens() : AnonymousScreens()}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
