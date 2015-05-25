/** @jsx React.DOM */

define([
    'react'
], function(
    React
) {

    var MenuPanel = React.createClass({

        render: function() {
            return (
                <div className='column' id='MenuPanel'>
                    <div id='Geocoder'></div>
                </div>
            )
        }

    });

    return MenuPanel;

});