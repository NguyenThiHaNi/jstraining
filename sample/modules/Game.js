import { Label } from "../lib/Label.js";
import { Node } from "../lib/Node.js";
import { Card } from "../modules/Card.js";
export class Game extends Node {

    init() {
        this._initSize();
        this._initCards();
        this._initScore();

        this.countClick = 0;
        this.countDone = 0;
        this.firstCard = null;
        this.secondCard = null;
    }

    _initSize() {
        this.width = 800;
        this.height = 480;
        this.elm.style.backgroundImage = "url(./img/trucxanh_bg.jpg)";
        this.elm.style.border = "1px solid red";
    }

    _initScore() {
        this.label = new Label();
        this.addChild(this.label);
        this.label.score = 10000;
    }

    _initCards() {
        const rand = this.ranDom(20);
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 4; j++) {
                let card = new Card(i, j, rand[i * 4 + j] % 10 + 1);
                this.addChild(card);
                card.on("mousedown", this.onClickCard.bind(this));
            }
        }

    }

    onClickCard(evt) {
        this.countClick++;
        let card = evt.target.node;

        if (this.countClick === 1) {
            this.firstCard = card;
            this.firstCard.showface();
            // break;
        } else if (this.countClick === 2) {
            const checkVsCard1 = this.firstCard.find(card.index, card.value);
            if ( checkVsCard1 === false) {      
                this.secondCard = card;
                this.secondCard.showface();
            } else if (checkVsCard1 === true) {
                this.countClick--;
            }
            if (this.countClick === 2) {
                setTimeout(() => {
                    if (this.firstCard.bg === this.secondCard.bg) {
                        this.firstCard.hidecard();
                        this.secondCard.hidecard();
                        this.label.score += 1000;
                        this.countDone += 1;
                    } else {
                        this.firstCard.showCover();
                        this.secondCard.showCover();
                        this.label.score -= 1000;
                    }
                    if (this.countDone === 10) {
                        this.label.score = 'Winner';
                    }

                    this.countClick = 0;    
                }, 500);
            }
        }
        console.log(this.firstCard, this.secondCard);
        console.log(card.index, card.value);
    }

    ranDom(n) {
        var arr = [];
        while (arr.length < n) {
            var r = Math.floor(Math.random() * n);
            if (arr.indexOf(r) === -1) arr.push(r);
        }
        return arr;
    }

}