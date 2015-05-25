/** @jsx React.DOM */

define([
    'react'
    , 'map/Controller'
], function(
    React
    , MapController
) {
    'use strict';

    var MapPanel = React.createClass({

        componentDidMount: function () {
            MapController.init(this.props.mapOptions);
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
