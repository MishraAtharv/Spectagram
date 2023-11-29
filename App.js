import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/Home';
import DailyPicScreen from './screens/DailyPic';
import SpaceCraftScreen from './screens/Feed';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Feed">
        <Stack.Screen name="Feed" component={SpaceCraftScreen} />
        <Stack.Screen name="CreatePost" component={DailyPicScreen} />
        <Stack.Screen name="Profile" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
