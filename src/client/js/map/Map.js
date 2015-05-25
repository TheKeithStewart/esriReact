/* global define */
define([
    "dojo/Evented",
    "dojo/_base/declare",
    // My Modules
    // Esri Modules
    "esri/map",
    "esri/dijit/Geocoder"
    , "esri/dijit/BasemapToggle"
], function (Evented, declare, Map, Geocoder, BasemapToggle) {
    'use strict';

    var _map = declare([Evented], {

        element: 'map',

        constructor: function (options) {
            declare.safeMixin(this, options);
            this.createMap();
        },

        createMap: function () {
            var self = this;

            self.map = new Map('map', {
                basemap: this.basemap,
                center: this.center,
                //sliderPosition: this.sliderPosition,
                zoom: this.zoom
            });

            self.map.on('load', function () {
                self.map.resize();
                self.mapLoaded();
                self.emit('ready', {});
            });

        },

        mapLoaded: function () {
            this.addWidgets();
        },

        addWidgets: function () {
            var self = this;

            var geocoder = new Geocoder({
                map: self.map,
                autoComplete: true,
                arcgisGeocoder: {
                    placeholder: "Enter address or region"
                }
            }, "Geocoder");
            geocoder.startup();

            var toggle = new BasemapToggle({
                map: self.map,
                basemap: "satellite"
            }, "BasemapToggle");
            toggle.startup();
        },

        addLayers: function () {
            console.log("test");
        },

        addLayerError: function (err) {

        }

    });

    return _map;

});
