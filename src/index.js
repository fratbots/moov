'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    View,
    Text,
} = ReactNative;
var Btn = require('Btn');
var Geo = new(require('Geo'));
var Mapa = new(require('Mapa'));

var Moov = React.createClass({
    render: function() {
        return (
            <View style={styles.container}>
                <View style={styles.mapContainer}>
                    {Mapa.render()}
                </View>
                <Btn/>
            </View>
        );
    },
});

Geo.setCallback(function(track) {
    var lastPoint = track.slice(-1)[0];
    if (!lastPoint) {
        return;
    }
    Mapa.setRegion({
        latitude: lastPoint.coords.latitude,
        longitude: lastPoint.coords.longitude,
        latitudeDelta: Mapa.LATITUDE_DELTA,
        longitudeDelta: Mapa.LONGITUDE_DELTA,
    });
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
});

AppRegistry.registerComponent('Moov', () => Moov);
