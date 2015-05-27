/** @jsx React.DOM */

define([
    'react'
    , 'config'
    , 'esri/map'
], function (
    React
    , config
    , Map
) {

    var App = React.createClass({

        getInitialState: function () {
            return {

            }
        }

        , componentDidMount: function () {
            var map = new Map('map', config.mapOptions);

            map.on('load', function() {

            });
        }

        , render: function () {
            return (
                <div className='app'>
                    //<Header appTitle='test title' />
                    //<Body map={this.props.map} />
                    <div id='map'></div>
                </div>
            );
        }

    });

    return {
        loadApp: function(map) {
            React.render(<App map={map} />, document.getElementById('app'));
        }
    }

});
