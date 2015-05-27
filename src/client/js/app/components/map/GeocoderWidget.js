/** @jsx React.DOM */

define([
    'react'
    , 'esri/dijit/Geocoder'
], function(
    React
    , Geocoder
) {

    var GeocoderWidget = React.createClass({

        componentDidMount: function() {
            var geocoder = new Geocoder({
                map: this.props.map,
                autoComplete: true,
                arcgisGeocoder: {
                    placeholder: "Enter address or region"
                }
            }, "Geocoder");
            geocoder.startup();
        }

        , render: function(){
            return (
                <div id='Geocoder'></div>
            );
        }

    });

    return GeocoderWidget;

});
