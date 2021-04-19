
import { Sprite} from "../lib/Sprite.js";
export class Card extends Sprite {
    constructor(index, value,ran) {
        super();
        this.index = index;
        this.value = value;
        this.width =  80;
        this.height = 80;
        this._cover = "./img/cardBg.jpg";
        //this._face = "./img/trucxanh1.jpg";
        this._face = "./img/trucxanh"+ran+".jpg";
        this.path = this._cover;
        this._isHidden = false;
    }
    // _initCover(text,image){
    //     let cover = new Cover();
    //     this.addChild(image);    
    // }
    _initElement() {
        super._initElement();

        this.elm.style.border = "1px solid blue";
    } 
    showFace(){
        this.path = this._face;
    }

}
