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
var Mapa = require('Mapa');

var Moov = React.createClass({
    render: function() {
        return (
            <View style={styles.container}>
                <View style={styles.mapContainer}>
                    <Mapa/>
                </View>
                <Btn/>
            </View>
        );
    },
});

Geo.setCallback(function(track) {
    var m = new Mapa();
    console.log("track updated", track);
    var lastPoint = track.slice(-1)[0];
    if (!lastPoint) {
        return;
    }
    m.setRegion({
        latitude: lastPoint.coords.latitude,
        longitude: lastPoint.coords.longitude,
        latitudeDelta: m.LATITUDE_DELTA,
        longitudeDelta: m.LONGITUDE_DELTA,
    });
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
});

AppRegistry.registerComponent('Moov', () => Moov);
