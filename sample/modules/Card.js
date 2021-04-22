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
        this.elm.className = "card" + index + value;
    }
    showface(){
        this.setImage(this.bg);
        gsap.to (".card" + this.index + this.value, {rotationY : -180});      
    }
    showCover(){
        this.setImage(this.cover);
        gsap.to (".card" + this.index + this.value, {rotationY : 0});      

    }


    _initElement() {
        super._initElement();
        this.elm.style.border = "1px solid blue";
        
    }
    hidecard(){
        let timeline = gsap.timeline();
        timeline.set(this, {
            zIndex : 1,
            delay : 0.2
        });
        timeline.to(this, {
            duration : 0.5 ,
            opacity : 0,
            scale : 3 ,
            active : false
        });
    }

    find(x, y) {
        if (this.index === x && this.value === y) {
            return true;
        }
        return false;
    }
}   