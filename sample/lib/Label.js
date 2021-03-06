import {Node} from "./Node.js";

export class Label extends Node {
  constructor() {
    super();
    this._score = '';
    this.x = 20;
    this.y = 50;
    this.elm.style.color = 'red';
    this.elm.style.fontSize = "20px";
  }
  get score() {
    return this._score;
  }
  set score(value) {
    this._score = value;
    if (value === 'Winner') {
      this.elm.innerHTML = 'YOU WIN';
    } else if (value === 0) {
      this.elm.innerHTML = 'YOU LOSE';
      //process.exit(1);
    } else {
      this.elm.innerText = 'SCORE: ' + this._score;
    }
  }
}