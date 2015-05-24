(function() {
    'use strict';

    var pathRX = new RegExp(/\/[^\/]+$/)
        , locationPath = location.pathname.replace(pathRX, '/');

    var jsPath = 'dist/client/js/';

    require({
        async: true,
        parseOnLoad: true,
        packages: [{
            name: 'react',
            location: locationPath + 'bower_components/react',
            main: 'react'
        }, {
            name: 'app',
            location: locationPath + jsPath + 'app',
            main: 'App'
        }, {
            name: 'map',
            location: locationPath + jsPath + 'map'
        }]
    }, ['app']);

})();