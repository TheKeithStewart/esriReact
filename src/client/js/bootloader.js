(function() {
    'use strict';

    var pathRX = new RegExp(/\/[^\/]+$/)
        , locationPath = location.pathname.replace(pathRX, '/');

    var jsPath = 'dist/client/js/';

    window.requestAnimationFrame = (function() {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame;
    })();

    require({
        async: true,
        parseOnLoad: true,
        packages: [{
            name: 'react',
            location: locationPath + 'bower_components/react',
            main: 'react'
        }, {
            name: 'classnames'
            , location: locationPath + 'bower_components/classnames'
            , main: 'index'
        }, {
            name: 'app',
            location: locationPath + jsPath + 'app',
            main: 'App'
        }, {
            name: 'map',
            location: locationPath + jsPath + 'map'
        }, {
            name: 'layout'
            , location: locationPath + jsPath + 'app/components/layout'
        }]
    }, ['app']);

})();