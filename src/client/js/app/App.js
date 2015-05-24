/** @jsx React.DOM */

define([
    'react'
    , 'app/config'
    , 'map/Controller'
    , 'app/components/layout/Header'
], function(
    React
    , config
    , MapController
    , Header
) {

    var App = React.createClass({

        componentDidMount: function () {
            MapController.init(config.defaultProps.mapOptions);
        }

        , render: function(){
            return (
                <div>
                    <Header />
                    <div id='map'></div>
                </div>
            );
        }

    });

    React.render(<App />, document.getElementById('app'));

});
