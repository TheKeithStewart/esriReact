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

    var App = React.createClass({

        getInitialState: function () {
            return {
                defaultProps: config.defaultProps
            }
        }

        , render: function () {
            return (
                <div className='app'>
                    <Header appTitle={this.state.defaultProps.appTitle} />
                    <Body mapOptions={this.state.defaultProps.mapOptions} />
                </div>
            );
        }

    });

    React.render(<App />, document.getElementById('app'));

});
