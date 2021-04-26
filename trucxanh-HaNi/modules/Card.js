import { Sprite} from "../lib/Sprite.js";
export class Card extends Sprite {
    constructor(index, value,vt) {
        super();
        this.index = index;
        this.value = value;
        this.number = this.index + this.value * 5 + 1;
        //this.temp = this.index + this.value * 5 + 1;
        this.x = 350;
        this.y = 200;
        this.width = 80;
        this.height = 80;
        this.bg = "./img/trucxanh"+ vt +".jpg";
        this.cover = "./img/cardBg.jpg";
        this.path = this.cover;
        this.elm.className = "card" + index + value;
    }
    showface(){
        this.setImage(this.bg);
        this.elm.innerHTML=''
        gsap.to (".card" + this.index + this.value, {rotationY : -180,}); 
        console.log(".card" + this.index + this.value);
        this.number = this.index + this.value * 5 + 1;
    }
    showCover(){
        this.setImage(this.cover);
        gsap.to (".card" + this.index + this.value, {rotationY : 0});
        this.number = "";
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