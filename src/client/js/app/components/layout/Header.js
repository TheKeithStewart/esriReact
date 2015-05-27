/** @jsx React.DOM */

define([
    'react'
], function(
    React
) {

    var Header = React.createClass({

        render: function(){
            return (
                <div className='header'>
                    <span className='title'>{this.props.defaultProps.appTitle}</span>
                </div>
            );
        }

    });

    return Header;
});
