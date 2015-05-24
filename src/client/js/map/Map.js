define([
    'esri/map'
    , 'appConfig'
    , 'dojo/domReady!'
], function(
    Map
    , config
) {
    var map = new Map('map', config.defaultProps.mapOptions);

    map.on('load', function() {

    });

    return map;
});