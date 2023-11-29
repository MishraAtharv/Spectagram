
import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Feed')}
      />
      <Button
        title="Go to CreatePost"
        onPress={() => navigation.navigate('CreatePost')}
      />
    </View>
  );
};

export default HomeScreen;
