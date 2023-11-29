
import React from 'react';
import { View, Text, Button } from 'react-native';

const DailyPicScreen = ({ navigation }) => {
  return (
    <View>
      <Text>DailyPic Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Feed')}
      />
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};

export default DailyPicScreen;
