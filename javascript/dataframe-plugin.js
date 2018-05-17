
var DataFrame = require("data-forge").DataFrame;

DataFrame.prototype.somePluginFunction = function () {
    console.log('plugin function!');
    return this;
}