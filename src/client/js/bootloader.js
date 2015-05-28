(function() {
    'use strict';

    var pathRX = new RegExp(/\/[^\/]+$/)
        , locationPath = location.pathname.replace(pathRX, '/');

    var jsPath = locationPath + 'dist/client/js';

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
            name: 'react'
            , location: locationPath + 'bower_components/react'
            , main: 'react'
        }, {
            name: 'classnames'
            , location: locationPath + 'bower_components/classnames'
            , main: 'index'
        }, {
            name: 'app'
            , location: jsPath + '/app'
        }, {
            name: 'layout'
            , location: jsPath + '/app/components/layout'
        }, {
            name: 'map'
            , location: jsPath + '/app/components/map'
        }, {
            name: 'main'
            , location: jsPath + '/main'
            , main: 'main'
        }]
    }, ['main']);

})();