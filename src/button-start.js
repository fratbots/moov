'use strict';

var React = require('react');
var ReactNative = require('react-native');

var {
    Text,
    TouchableOpacity,
    View
} = ReactNative;


class ButtonStart extends Component{
    static defaultProps = {
        started: true,
        onPress: function () {
            this.props.started = !(this.props.started)
        }
    };

    render() {
        if (this.props.started) {
            return (
                <TouchableOpacity onPress={this.onPress}>
                    <Text>stared</Text>
                </TouchableOpacity>
            );
        }
        // <TouchableOpacity style={styles.button_touchable}></TouchableOpacity>
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <Text>not stared</Text>
            </TouchableOpacity>
        );
    }
};


module.exports = ButtonStart