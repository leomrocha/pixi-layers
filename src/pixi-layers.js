/**
* This Module extends PIXI to support layers
* Depends on underscore.js
*
*/

//function PIXI.Layers() {
PIXI.Layers = function () {

	PIXI.DisplayObjectContainer.call(this);
	
	//TODO
	//layers by name
    this.layersDict = {};
    //mapping between name and index (position) in the children array
    this.layersDictIndexMapping = {};
    //children array that also includes 
    this.layersArray = [];
    //dict that indicates if a layer is in the child tree or not
    this.visibility = {};
	
}

PIXI.Layers.constructor = PIXI.Layers;
PIXI.Layers.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);


PIXI.Layers.prototype.createLayer = function(name){
    var layer = new PIXI.DisplayObjectContainer();
    this.layersDict[name] = layer;
    this.visibility[name] = true;
    this.layersDictIndexMapping[name] = this.layersArray.length
    this.layersArray.push(layer)
    this.addChild(layer)
    //assert that length of children and lenght of layersArray 
    return layer;
    
};

/**
* Toggles visibility for one sublayer, 
* If it becomes visible it MAINTAINS the order in which the element was before
* 
*
*/
PIXI.Layers.prototype.toggleVisibility = function(name){
    //TODO
    console.error("Not implemented yet");
};

PIXI.Layers.prototype.getLayerByName = function(name){
    //TODO make it more robust!!
    //console.error("getting layer name: ", name, " from ", this.layersDict);
    return this.layersDict[name];
};

PIXI.Layers.prototype.getLayerByOrder = function(order){
    return this.layersArray[order]
};


PIXI.Layers.prototype.getLayerNames = function(){
    return _.keys(this.layersDict);
};

PIXI.Layers.prototype.sendLayerAt = function(layerName, position){
    //TODO
    console.error("Not implemented yet");
};

PIXI.Layers.prototype.sendLayerToBottom = function(layerName){
    //TODO
    console.error("Not implemented yet");
};

PIXI.Layers.prototype.sendLayerToTop = function(layerName){
    //TODO
    console.error("Not implemented yet");
};
