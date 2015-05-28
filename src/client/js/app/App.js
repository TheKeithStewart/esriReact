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
        }

        , render: function () {
            return (
                <div className='container'>
                    <div className='app'>
                        <Header defaultProps={config.defaultProps}></Header>
                        <Body setMapState={this.setMapState} map={this.state.map}></Body>
                    </div>
                </div>
            );
        }

        , setMapState: function(map) {
            component.setState({map: map});
        }

    });

    return App;

});
