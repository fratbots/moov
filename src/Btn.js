/**
 * @providesModule Btn
 */
'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
    Platform,
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    TouchableNativeFeedback,
} = ReactNative;

var Btn = React.createClass ({
    buttonClicked: function() {
        var result = fetch('http://localhost:8001/location', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                lat: 100.1,
                lng: 50.5,
            })
        });
        console.log(result);
    },
    render: function() {
        var TouchableElement = TouchableHighlight;
        if (Platform.OS === 'android') {
            TouchableElement = TouchableNativeFeedback;
        }
        return (
            <View style={styles.buttonContainer}>
                <TouchableElement
                    style={styles.button}
                    onPress={this.buttonClicked}>
                    <View>
                        <Text style={styles.buttonText}>
                            Send location
                        </Text>
                    </View>
                </TouchableElement>
            </View>
       );
    }
});

var styles = StyleSheet.create({
    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        left: 20,
        height: 50,
    },
    button: {
    },
    buttonText: {
    },
});

module.exports = Btn;
