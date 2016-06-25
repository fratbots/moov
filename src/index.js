'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    View,
    Text,
} = ReactNative;
var MapView = require('react-native-maps');
var Btn = require('Btn');
var Geo = new(require('Geo'));

Geo.setCallback(function(track) {
    console.warn("track", track);
});

var Moov = React.createClass({
    render: function() {
        return (
            <View style={styles.container}>
                <View style={styles.mapContainer}>
                    <MapView
                        style={styles.map}
                        initialRegion={{
                            latitude: 55.774332,
                            longitude: 37.604595,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    />
                </View>
                <Btn/>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    mapContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    map: {
        flex: 1,
        flexDirection: 'column',
    },
});

AppRegistry.registerComponent('Moov', () => Moov);
