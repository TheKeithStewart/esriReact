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
            if (this.props.map) {
                this.startBasemap(this.props.map);
            }
        }

        , componentWillUpdate: function(nextProps, nextState) {
            if (nextProps.map) {
                this.startBasemap(nextProps.map);
            }
        }

        , render: function(){
            return (
                <div id='BasemapToggle'></div>
            );
        }

        , startBasemap: function(map) {
            var toggle = new BasemapToggle({
                map: map,
                basemap: "satellite"
            }, "BasemapToggle");
            toggle.startup();
        }

    });

    return BasemapToggleWidget;

});
