import React from 'react';
import { View, Text, Button } from 'react-native';
import UserList from './UserList'; // Adjust the path as necessary
import styles from './styles';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>User List</Text>
      <UserList navigation={navigation} />
    </View>
  );
};

export default HomeScreen;
