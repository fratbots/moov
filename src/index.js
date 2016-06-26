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
var GLOBAL = require('Globals');

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
    var lastPoint = track.slice(-1)[0];
    if (!lastPoint) {
        return;
    }
    fetch('http://localhost:8001/location', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            lat: lastPoint.coords.latitude,
            lng: lastPoint.coords.longitude,
        })
    }).then((resp) => {
        if (resp.status === 200 && resp.ok) {
            return resp.json();
        }
    }).then((obj) => {
        if (obj) {
            Geo.storeObj(obj);
            GLOBAL.EMITTER.emit('change', {
                line: [
                    {latitude: 39.70825, longitude: -124.4424},
                    {latitude: 39.70825, longitude: -124.4524},
                    {latitude: 39.70825, longitude: -124.4724},
                ],
                objs: [
                    {"one": "two"},
                ],
            })
        }
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
