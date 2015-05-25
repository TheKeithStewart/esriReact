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

        getDefaultProps: function () {
            return {
                defaultProps: config.defaultProps
            }
        }

        , render: function () {
            return (
                <div className='app'>
                    <Header title={this.props.appTitle} />
                    <Body mapOptions={this.props.defaultProps.mapOptions} />
                </div>
            );
        }

    });

    React.render(<App />, document.getElementById('app'));

});
