
import React from 'react';
import { View, Text, Button } from 'react-native';

const SpaceCraftScreen = ({ navigation }) => {
  return (
    <View>
      <Text>SpaceCraft Screen</Text>
      <Button
        title="Go to Posts"
        onPress={() => navigation.navigate('CreatePost')}
      />
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};

export default SpaceCraftScreen;
