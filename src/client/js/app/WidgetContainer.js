/** @jsx React.DOM */
define([
    'react'
    , 'dojo/query'
    , 'dojo/dom-construct'
    , 'app/components/layout/MapPanel'
], function(
    React,
    query, domConstruct
    , MapPanel
) {

    var createContainer = function() {
        var c = query('.widget-container');
        if (c.length) {
            return c.shift();
        }

        var container = domConstruct.create('div', {
            className: 'widget-container'
        }, document.getElementById('app'), 'first');
        return container;
    };

    var addContainer = function(map) {
        React.render(
            <div>
                <MapPanel />
            </div>,
            createContainer());
    };

    return {
        addContainer: addContainer
    };

});

    //var Header = React.createClass({
    //    render: function(){
    //        return (
    //            <div>
    //                Header
    //            </div>
    //        );
    //    }
    //});
    //
    //var MenuPanel = React.createClass({
    //    render: function(){
    //        return (
    //            <div>
    //                Menu Panel
    //            </div>
    //        );
    //    }
    //});
    //
    //var AppContainer = React.createClass({
    //    render: function(){
    //        return (
    //            <div>
    //                <Header />
    //                <MenuPanel />
    //            </div>
    //        )
    //    }
    //});
    //
    //React.render(<AppContainer />, document.getElementById('app'));

//});
