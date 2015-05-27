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
                    <span className='title'>{this.props.appTitle}</span>
                </div>
            );
        }

    });

    return Header;
});
