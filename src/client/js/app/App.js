/** @jsx React.DOM */

define([
    'react'
    , 'main/config'
    , 'esri/map'
    , 'layout/Header'
    , 'layout/MenuPanel'
    , 'app/components/MapComponents'
], function (
    React
    , config
    , Map
    , Header
    , MenuPanel
    , MapComponents
) {

    var App = React.createClass({

        getInitialState: function () {
            return {

            }
        }

        , componentDidMount: function () {

        }

        , render: function () {
            return (
                <div className='app'>
                    <Header defaultProps={config.defaultProps}></Header>
                    <MenuPanel map={this.props.map}></MenuPanel>
                    <MapComponents map={this.props.map}></MapComponents>
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
