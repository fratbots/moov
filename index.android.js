/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var MapView = require('react-native-maps');

//const requireNativeComponent = require('requireNativeComponent');
//
//const RCTMap = requireNativeComponent('RCTMap', MapView, {
//  nativeOnly: {
//    onAnnotationDragStateChange: true,
//    onAnnotationFocus: true,
//    onAnnotationBlur: true,
//    onChange: true,
//    onPress: true
//  }
//});

class Moov extends Component {
  render() {
    return (
        <MapView
            style={styles.map}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
    );
  }
}

const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'space-around'
  },
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'blue',
    justifyContent: 'space-around'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Moov', () => Moov);
