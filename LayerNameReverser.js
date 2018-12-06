var doc = app.activeDocument;
var allLayers = [];
allLayers = collectAllLayers(doc, allLayers);

function collectAllLayers (doc, allLayers){
    for (var m = 0; m < doc.layers.length; m++){
        var theLayer = doc.layers[m];
        if (theLayer.typename === "ArtLayer"){
            allLayers.push(theLayer);
        }else{
            collectAllLayers(theLayer, allLayers);
        }
    }
    return allLayers;
}

function reverseName (str)
{
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;

}


//set number of parent layers (layer folders)
for (var i = 0; i < allLayers.length; i++) {

    var psLayer = allLayers[i];
    psLayer.name=reverseName(psLayer.name);

}




alert("Successfully renamed layers")