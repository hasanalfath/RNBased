import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Application from './src/app/auth/application.js';
import allReducers from './src/modules/auth/store/index.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import { TextInput, TouchableOpacity } from 'react-native';
const store = createStore(allReducers);
export default class App extends React.Component {
  render() {
    return (
      <Application />
    );
  }
}