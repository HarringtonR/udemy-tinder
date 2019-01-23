import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import createMaterialTopTabNavigator from './TabNavigator.js';
import {
  Text,
  View
} from 'react-native';

const AppContainer = createAppContainer(createMaterialTopTabNavigator);



export default class RootNavigator extends React.Component {
  render() {

    return <AppContainer/>
  }
}
