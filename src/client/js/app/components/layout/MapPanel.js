/** @jsx React.DOM */

define([
    'react'
], function(
    React
) {
    'use strict';

    var MapPanel = React.createClass({

        getInitialState: function() {
            return {

            }
        }

        , render: function(){
            return (
                <div id='MapPanel' className='map-panel'>
                    <div className='settings-icon' onClick={this.props.clickToggle}></div>
                </div>
            );
        }
    });

    return MapPanel;
});
