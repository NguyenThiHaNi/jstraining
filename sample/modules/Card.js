import { Sprite} from "../lib/Sprite.js";
export class Card extends Sprite {
    constructor(index, value,vt) {
        super();
        this.index = index;
        this.value = value;
        this.x = index * 100;
        this.y = value * 100;
        this.x = index * 100 + 120;
        this.y = value * 100 + 50;
        this.width = 80;
        this.height = 80;
        this.bg = "./img/trucxanh"+ vt +".jpg";
        this.cover = "./img/cardBg.jpg";
        this.path = this.cover;
    }
    showface(){
        this.setImage(this.bg);
        
    }
    showCover(){
        this.setImage(this.cover)
        
    }


    _initElement() {
        super._initElement();
        this.elm.style.border = "1px solid blue";
        
    }

    find(x, y) {
        if (this.index === x && this.value === y) {
            return true;
        }
        return false;
    }
}   