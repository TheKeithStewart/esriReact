/** @jsx React.DOM */

define([
    'react'
    , 'app/config'
    , 'layout/Header'
    , 'layout/Body'
], function (
    React
    , config
    , Header
    , Body
) {

    var map;
    var component;

    var App = React.createClass({

        getInitialState: function () {
            return {
                map: map
            }
        }

        , componentDidMount: function () {
            component = this;
            //map = new Map('map', config.mapOptions);
            //var component = this;
            //map.on('load', function() {
            //    component.setState({map: map});
            //});
        }

        , render: function () {
            return (
                <div className='app'>
                    <Header defaultProps={config.defaultProps}></Header>
                    <Body setMapState={this.setMapState} map={this.state.map}></Body>
                </div>
            );
        }

        , setMapState: function(map) {
            component.setState({map: map});
        }

    });

    React.render(<App />, document.getElementById('app'));

});
