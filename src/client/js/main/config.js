define([], function() {
    "use strict";

    return {
        'defaultProps': {
            'appTitle': 'Mapping Application'
        }
        , 'mapOptions': {
            "basemap": "streets"
            , "center": [
                -117.7800,
                33.6700
            ]
            , "zoom": 15
        }
    };
});