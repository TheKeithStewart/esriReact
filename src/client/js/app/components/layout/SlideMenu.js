/** @jsx React.DOM */

define([
    'react'
    , 'layout/MapPanel'
    , 'layout/MenuPanel'
    , 'classnames'
], function(
    React
    , MapPanel
    , MenuPanel
    , classnames
) {

    var SlideMenu = React.createClass({

        getInitialState: function() {
            return {
                menuOpen: false
            }
        }

        , getDefaultProps: function() {
            return {
                menuId: 'MenuPanel',
                panelId: 'MapPanel',
                menuWidth: 320,
                fps: (1000 / 60),
                duration: 275,
                easing: {
                    enabled: true,
                    factor: 0.25
                }
            };
        }

        , render: function() {
            var classes = classnames({
                'slide-menu': true
                , 'open': this.state.menuOpen
                , 'close': !this.state.menuOpen
            });

            return (
                <div className={classes}>
                    <MenuPanel />
                    <MapPanel clickToggle={this._toggle} mapOptions={this.props.mapOptions} />
                </div>
            )
        }

        , _toggle: function () {
            if (this.state.menuOpen) {
                this._close();
            } else {
                this._open();
            }
        }

        , _open: function() {
            var menuNode = document.getElementById(this.props.menuId),
                panelNode = document.getElementById(this.props.panelId),
                stepAmount = (this.props.fps / this.props.duration) * this.props.menuWidth,
                easingPoint = this.props.menuWidth - (this.props.menuWidth * this.props.easing.factor),
                endingPosition = this.props.menuWidth,
                useEasing = this.props.easing.enabled,
                easeAmount = stepAmount / 2,
                currentPosition = 0,
                self = this;

            function step() {
                // Get the next current position
                currentPosition += (useEasing && currentPosition > easingPoint) ? easeAmount : stepAmount;
                currentPosition = (currentPosition > endingPosition) ? endingPosition : currentPosition;

                // Increment to the correct position
                panelNode.style.left = currentPosition + 'px';
                menuNode.style.width = currentPosition + 'px';

                // If we have more to go, repeat, else exit
                if (currentPosition < endingPosition) {
                    requestAnimationFrame(step);
                } else {
                    self._updateMenuState();
                    // Add any other necessary code here
                    app.map.resize();
                }
            }

            requestAnimationFrame(step);
        }

        , _close: function() {
            var menuNode = document.getElementById(this.props.menuId),
                panelNode = document.getElementById(this.props.panelId),
                stepAmount = (this.props.fps / this.props.duration) * this.props.menuWidth,
                easingPoint = this.props.menuWidth * this.props.easing.factor,
                currentPosition = this.props.menuWidth,
                useEasing = this.props.easing.enabled,
                easeAmount = stepAmount / 2,
                endingPosition = 0;

            function step() {
                // Get the next current position
                currentPosition -= (useEasing && currentPosition < easingPoint) ? easeAmount : stepAmount;
                currentPosition = (currentPosition < endingPosition) ? endingPosition : currentPosition;

                // Increment to the correct position
                panelNode.style.left = currentPosition + 'px';
                menuNode.style.width = currentPosition + 'px';

                // If we have more to go, repeat, else exit
                if (currentPosition > endingPosition) {
                    requestAnimationFrame(step);
                } else {
                    // Add any other necessary code here
                    app.map.resize();
                }
            }

            this._updateMenuState();
            requestAnimationFrame(step);

        }

        , _updateMenuState: function () {
            this.setState({
                menuOpen: !this.state.menuOpen
            });
        }

    });

    return SlideMenu;
});