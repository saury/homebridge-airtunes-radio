const HomePodRadioPlatform = require('./lib/HomePodRadioPlatform');

let Service, Characteristic;

module.exports = function (homebridge) {
    Service = homebridge.hap.Service;
    Characteristic = homebridge.hap.Characteristic;
    homebridge.registerAccessory("homebridge-homepod-radio", "HomePodRadio", HomePodRadioPlatform);
}