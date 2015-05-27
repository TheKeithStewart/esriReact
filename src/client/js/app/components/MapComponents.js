/** @jsx React.DOM */

define([
    'react'
    , 'map/BasemapToggleWidget'
], function(
    React
    , BasemapToggleWidget
) {
    'use strict';

    var MapComponents = React.createClass({

        getInitialState: function() {
            return {

            }
        }

        , render: function(){
            return (
                <div>
                    <BasemapToggleWidget map={this.props.map}></BasemapToggleWidget>
                </div>
            );
        }
    });

    return MapComponents;

});
