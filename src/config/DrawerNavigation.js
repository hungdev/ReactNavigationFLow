import React from 'react';
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';
import { Icon1 } from 'react-native-elements';
import { StyleSheet, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Feed from '../screens/Feed';
import Settings from '../screens/Settings';
import UserDetail from '../screens/UserDetail';
import Me from '../screens/Me';
const myIcon = (<Icon name="rocket" size={30} color="#900" />)

class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',

  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',

  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

export const MyApp = DrawerNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
});
