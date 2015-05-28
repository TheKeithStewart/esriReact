/** @jsx React.DOM */

define([
    'react'
    , 'layout/MenuPanel'
    , 'layout/MapPanel'
], function(
    React
    , MenuPanel
    , MapPanel
) {

    var Body = React.createClass({

        render: function() {
            return (
                <div className='body'>
                    <MenuPanel map={this.props.map}></MenuPanel>
                    <MapPanel setMapState={this.props.setMapState} map={this.props.map}></MapPanel>
                </div>
            )
        }

    });

    return Body;
});