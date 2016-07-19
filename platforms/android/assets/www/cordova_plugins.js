cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.cambiocreative.cordova.plugin.zeroconf/www/zeroconf.js",
        "id": "com.cambiocreative.cordova.plugin.zeroconf.ZeroConf",
        "clobbers": [
            "cambiocreative.CDVZeroConfig"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.2",
    "com.cambiocreative.cordova.plugin.zeroconf": "1.0.9"
};
// BOTTOM OF METADATA
});