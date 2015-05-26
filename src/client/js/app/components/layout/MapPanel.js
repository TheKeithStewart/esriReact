/** @jsx React.DOM */

define([
    'react'
    , 'map/Map'
    , 'map/Controller'
], function(
    React
    , Map
    , MapController
) {
    'use strict';

    var MapPanel = React.createClass({

        getInitialState: function() {
            return {

            }
        }

        , componentDidMount: function () {
            //MapController.init(this.props.mapOptions);

            var map = new Map(this.props.mapOptions);

            map.on('ready', function() {
                console.log(map);
            });
        }

        , render: function(){
            return (
                <div id='MapPanel' className='map-panel'>
                    <div id='map'>
                        <div id='BasemapToggle'></div>
                    </div>
                    <div className='settings-icon' onClick={this.props.clickToggle}></div>
                </div>
            );
        }
    });

    return MapPanel;
});
