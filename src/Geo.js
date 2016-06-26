/**
 * @providesModule Geo
 */
'use strict';

var Geo = function() {
    this.watchId = (null: ?number)
    this.callback = null;
    this.track = [];
    this.objs = [];
};

Geo.prototype.setCallback = function(callback) {
    this.callback = callback;
    this.startListen();
};

Geo.prototype.startListen = function() {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            this.track.push(position)
        },
        (error) => {
            console.log(error.message);
        },
        {
            enableHighAccuracy: true,
            timeout: 100,
            maximumAge: 1000,
        }
    );
    this.watchId = navigator.geolocation.watchPosition(
        (position) => {
            this.track.push(position);
            this.callback(this.track);
        },
    );
};

Geo.prototype.stopListen =  function() {
    navigator.geolocation.clearWatch(this.watchId);
};

Geo.prototype.storeObj = function(obj) {
    this.objs.push(obj);
}

Geo.prototype.getObjs = function() {
    return this.objs;
}

module.exports = Geo;
