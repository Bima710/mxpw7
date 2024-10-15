import React from 'react';
import { Button, View } from 'react-native';
import UserList from './UserList'; // Adjust the path as necessary

const Email = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <UserList navigation={navigation} />
      <Button title="Go Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default Email;
