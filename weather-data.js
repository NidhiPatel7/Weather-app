"use strict"

function Weather(cityName, description)
{
    this.cityName = cityName;
    this.description = description;
    this._temperature = '';// means its secret not come from constructor
    //this means change temperature create geter and seter for this
}

Object.defineProperty(Weather.prototype,'temperature',{
    //temperature here we access temperature
    get:function(){
        return this._temperature;
    },
    set:function(value){
        this._temperature = (value * 1.8 + 32).toFixed(2) + 'F.';
        // change temp into ferenhight
    }
});