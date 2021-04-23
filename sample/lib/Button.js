import {Node} from "./Node.js";
export class Button extends Node {
    constructor(){
        super();
        this._name = "";
        this.width = 100;
        this.height = 50;
        this.elm.style.fontSize = "18px";
        this.elm.style.backgroundColor = "green ";
        this.x = 20;
        this.y = 80;
    }
    get name (){
        return this._name;
    }
    set name(value){
        this._name = value;
        this.elm.innerHTML = this._name;
    }
    _initElement (){
        this.elm = document.createElement("button");
        this.elm.node = this;
        this.elm.style.position = "absolute";

    }
    setName (str){
        this.elm.innerHTML = str;
    }
}
