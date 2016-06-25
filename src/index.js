'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
    View,
    Text,
    StyleSheet,
    AppRegistry,
} = ReactNative;
var MapView = require('react-native-maps');

var Moov = React.createClass({
    render: function() {
        return (
            <View style={{}}>
                <MapView
                    style={{width:1080, height:1920}}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
            </View>
        );
    }
});

AppRegistry.registerComponent('Moov', () => Moov);
