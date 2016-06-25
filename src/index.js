'use strict';

import React, {
  Component,
} from 'react';

import {
    View,
    Text,
    StyleSheet,
    AppRegistry,
    TouchableOpacity
} from 'react-native';

import MapView from 'react-native-maps';

var Moov = React.createClass({
    render: function() {
        return (
            <View style={styles.container}>
                <View style={styles.container}>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
                </View>
                <ButtonStart style></ButtonStart>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    button_touchable: {
        flex: 1,
        flexDirection: 'column',
    },
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    map: {
        flex: 1,
        flexDirection: 'column',
    }
});

AppRegistry.registerComponent('Moov', () => Moov);
