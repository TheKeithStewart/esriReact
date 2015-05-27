/** @jsx React.DOM */

define([
    'react'
    , 'layout/SlideMenu'
    , 'app/components/BasemapToggle'
], function(
    React
    , SlideMenu
    , BasemapToggle
) {

    var Body = React.createClass({

        render: function() {
            return (
                <div className='body'>
                    <SlideMenu map={this.props.map} mapOptions={this.props.mapOptions} />
                    <BasemapToggle map={this.props.map} />
                </div>
            )
        }

    });

    return Body;
});