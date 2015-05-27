/** @jsx React.DOM */

define([
    'react'
    , "esri/dijit/BasemapToggle"
], function(
    React
    , BasemapToggle
) {

    var BasemapToggleWidget = React.createClass({

        componentDidMount: function() {
            var toggle = new BasemapToggle({
                map: this.props.map,
                basemap: "satellite"
            }, "BasemapToggle");
            toggle.startup();

        }

        , render: function(){
            return (
                <div id='BasemapToggle'></div>
            );
        }

    });

    return BasemapToggleWidget;

});
