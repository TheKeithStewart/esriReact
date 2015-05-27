require([
    'esri/map'
    , 'main/config'
    , 'app/App'
    , 'dojo/domReady!'
], function(
    Map
    , config
    , App
) {
    var map = new Map('map', config.mapOptions);

    map.on('load', function() {
        App.loadApp(map);
    });
});