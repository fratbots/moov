/**
 * @providesModule Mapa
 */
'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
    StyleSheet,
    Dimensions,
} = ReactNative;
var MapView = require('react-native-maps');

var {width, height} = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0422;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

var Mapa = React.createClass({
    render: function() {
        return (
            <MapView
                ref={(ref) => {this._zimap = ref}}
                style={styles.map}
                initialRegion={{
                    latitude: LATITUDE,
                    longitude: LONGITUDE,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA,
                }}
            />
        );
    },
    setRegion: function(region) {
        if (this._zimap) {
            this._zimap.animateToRegion(region);
        }
    },
});

var styles = StyleSheet.create({
    map: {
        flex: 1,
        flexDirection: 'column',
    },
});

module.exports = Mapa;
