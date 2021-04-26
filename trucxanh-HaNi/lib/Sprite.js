import { Node } from "./Node.js";
export class Sprite extends Node {
    constructor(path) {
        super();
        this._path = "";
        this._number = -1;
        this._temp = -1;
        //if (path) this.path = path;
    }
    get number(){
        return this._number;
    }
    set number(value){
        this._number = value;
    }
    get temp(){
        return this._temp
    }
    set temp(value){
        this._temp = value;
    }

    get path() {
        return this._path;
    }
    set path(value) {
        this._path = value;
        //this.elm.src = this._path;
        this.elm.style.backgroundImage = "url("+ this._path+")";
        this.elm.style.backgroundSize = "80px 80px";
        this.elm.innerHTML = this._number;
        this.elm.style.display = "flex";
        this.elm.style.justifyContent = "center";
        this.elm.style.alignItems = "center"; 
    }
    _initElement() {
        this.elm = document.createElement("div");
        this.elm.node = this;
        this.elm.style.position = "absolute";
    }
    setImage(path) {
        this.path = path;  
        this.elm.style.backgroundImage = "url("+ this._path+")";
    }
}