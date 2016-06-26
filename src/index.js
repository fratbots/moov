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
            Mapa.setPointOfInterests(obj);
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
