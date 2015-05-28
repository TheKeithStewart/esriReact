/** @jsx React.DOM */

define([
    'react'
    , 'esri/map'
    , 'app/config'
    , 'layout/Header'
    , 'layout/MenuPanel'
], function (
    React
    , Map
    , config
    , Header
    , MenuPanel
) {

    var map;

    var App = React.createClass({

        getInitialState: function () {
            return {
                map: map
            }
        }

        , componentDidMount: function () {
            map = new Map('map', config.mapOptions);
            var component = this;
            map.on('load', function() {
                component.setState({map: map});
            });
        }

        , render: function () {
            return (
                <div className='app'>
                    <Header defaultProps={config.defaultProps}></Header>
                    <div className='body'>
                        <MenuPanel map={this.state.map}></MenuPanel>
                        <div id='map' className="map-panel">
                            <div id="settings-icon" className='settings-icon'></div>
                        </div>
                    </div>
                </div>
            );
        }

    });

    React.render(<App />, document.getElementById('app'));

});
