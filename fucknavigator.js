// ==UserScript==
// @name        Fuck Navigator
// @namespace   a
// @description fuck all those shit
// @include     *
// @version     1.0
// ==/UserScript==
var fakePlatformGetter = function () {
    return "FUCK OFF";
};
var a = ["platform", "getBattery", "keyboard", "deviceMemory", "geolocation", "activeVRDisplays", "battery", "connection", "languages", "language", "clipboard", "plugins", "storage", "vibrate", "credentials", "mediaDevices", "product", "productSub", "usb", "appCodeName", "appName", "vendor", "getGamepads", "onLine", "maxTouchPoints", "hardwareConcurrency"];
for (var i = 0; i < a.length; i++) {
    if (Object.defineProperty) {
        Object.defineProperty(navigator, a[i], {
            get: fakePlatformGetter
        });
    } else if (Object.prototype.__defineGetter__) {
        navigator.__defineGetter__("platform", fakePlatformGetter);
    }
}