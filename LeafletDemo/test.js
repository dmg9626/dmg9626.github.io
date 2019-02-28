var selectedStyle = {
    weight: 5,
    color: '#666',
    dashArray: '',
    fillOpacity: 0.7
};

var highlightedStyle = {
    weight: 3,
    color: '#666',
    dashArray: '',
    fillOpacity: 0.7
};

// sets base style for all regions on map
function style(feature) {
    return {
        fillColor: getColor(feature.properties.density),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

// Used to set state color based on population
function getColor(d) {
    return d > 1000 ? '#800026' :
        d > 500  ? '#BD0026' :
        d > 200  ? '#E31A1C' :
        d > 100  ? '#FC4E2A' :
        d > 50   ? '#FD8D3C' :
        d > 20   ? '#FEB24C' :
        d > 10   ? '#FED976' :
                    '#FFEDA0';
}

function onEachFeature(feature, layer) {
    // Mobile doesn't work well with mouseover/mouseout
    if(isMobile()) {
        layer.on({
            click: selectFeature,
        });
    }

    // Default desktop events
    else {
        layer.on({
            click: selectFeature,
            mouseover: highlightFeature,
            mouseout: mouseout,
        });
    }
}





// Called on state hover
function highlightFeature(e) {
    console.log("highlightFeature()");

    var layer = e.target;

    if(!compareStates(e, currentSelectedState)) {
        layer.setStyle(highlightedStyle);

    }
}

var currentSelectedState;

// Called when state is clicked
function selectFeature(e) {
    console.log("selectFeature()");

    var layer = e.target;

    console.log("selected state " + layer.feature.properties.name);

    if(currentSelectedState != null) {
        console.log("Previously selected state: " + currentSelectedState.target.feature.properties.name);
        resetHighlight(currentSelectedState);
    }
    currentSelectedState = e;

    layer.setStyle(selectedStyle);

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }

    info.update(layer.feature.properties);
}


function compareStates(state, otherState) {
    if(state != null && otherState != null) {
        console.log("comparing states " + state.target.feature.properties.name + ", " + otherState.target.feature.properties.name);
        return state.target == otherState.target;
    }
}

function mouseout(e) {
    console.log("mosueout()");
    if(compareStates(e, currentSelectedState)) {
        console.log("don't deselect!!");
        return;
    }
    resetHighlight(e);
}

function resetHighlight(e) {
    console.log("resetHighlight() on " + e.target.feature.properties.name);

    // Remove stroke
    geojson.resetStyle(e.target);
    // info.update();
}

function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}

// returns true if user is on mobile, false otherwise
function isMobile() {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}