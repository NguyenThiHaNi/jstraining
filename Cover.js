import {Sprite} from "../lib/Sprite.js";
export class Cover extends Sprite {
    constructor(text,image){
        super();
        this._text = "";
        this._image = "";
        if (text) this.text = text;
        if (image) this.image = image;
    }
    get text(){
        return this._text;
    }
    set text(value){
        this._text = value; 
        this.elm.innerText = this._text;
    }
    get image(){
        return this._image;
    }
    set image(value){
        this._image =  value;
        this.elm.innerText = this.image;
        }
        
}