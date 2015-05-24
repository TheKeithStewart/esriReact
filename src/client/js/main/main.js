define([
    'esri/map'
    , 'appConfig'
    , 'app/WidgetContainer'
    , 'dojo/domReady!'
], function(
    Map
    , config
    , WidgetContainer
) {
    var map = new Map('map', config.defaultProps.mapOptions);

    map.on('load', function() {
        WidgetContainer.addContainer(map);
    });
});