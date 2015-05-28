/** @jsx React.DOM */

define([
    'react'
    , 'app/config'
    , 'esri/map'
    , 'map/BasemapToggleWidget'
], function (
    React
    , config
    , Map
    , BasemapToggleWidget
) {

    var MapPanel = React.createClass({

        componentDidMount: function () {
            var map = new Map('map', config.mapOptions);
            var component = this;
            map.on('load', function () {
                component.props.setMapState(map);
            });
        }

        , render: function () {
            return (
                <div id='MapPanel' className="map-panel">
                    <div id='map'>
                        <div id="settings-icon" className='settings-icon'></div>
                        <BasemapToggleWidget map={this.props.map}></BasemapToggleWidget>
                    </div>
                </div>
            )
        }

    });

    return MapPanel;
});