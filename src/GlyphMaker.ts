/**
 * Glyph Maker
 */

import { EventEmitter } from 'events';

export class GlyphMaker extends EventEmitter {

  // Canvas context
  context: CanvasRenderingContext2D = null;

  // Font family
  fontFamily: string = '';

  // Canvas size
  size: number = 0;

  // Ideographic Description Character
  idc: string = '';

  constructor(canvas: HTMLCanvasElement) {
    super();

    this.fontFamily = getComputedStyle(document.body).fontFamily;
    this.size = canvas.offsetHeight;
    this.context = canvas.getContext('2d');

    this.bindEvents();
  }

  clearCanvas() {
    this.context.clearRect(0, 0, this.size, this.size);
  }

  drawIdc() {
    this.context.font = `${this.size * 1.285}px ${this.fontFamily}`;
    this.context.textBaseline = 'hanging';
    this.context.fillStyle = '#d0d0d0';
    this.context.fillText(this.idc, -this.size * .142, -this.size * .03);
  }

  drawText(block1: string, block2: string, block3: string) {
    this.clearCanvas();
    // this.drawIdc();

    this.context.font = `${this.size * .9}px ${this.fontFamily}`;
    this.context.fillStyle = '#000';

    switch (this.idc) {
    case '⿰':
      this.drawLeft(block1);
      this.drawRight(block2);
      break;
    case '⿱':
      this.drawTop(block1);
      this.drawBottom(block2);
      break;
    case '⿲':
      this.drawTriLeft(block1);
      this.drawTriHorizontalMiddle(block2);
      this.drawTriRight(block3);
      break;
    case '⿳':
      this.drawTriTop(block1);
      this.drawTriVerticalMiddle(block2);
      this.drawTriBottom(block3);
      break;
    case '⿴':
      this.drawRing(block1);
      this.drawCenter(block2);
      break;
    }
  }

  private bindEvents() {
    Array.from(document.querySelectorAll('.ideographic')).forEach((li: HTMLLIElement) => {
      li.addEventListener('click', () => {
        this.idc = li.innerText;
        this.emit('change:idc', this.idc);
        this.clearCanvas();
        this.drawIdc();
      }, false);
    });
  }

  private drawLeft(text: string) {
    this.context.save();
    this.context.scale(.5, 1);
    this.context.fillText(text, this.size * .15, this.size * .12);
    this.context.restore();
  }

  private drawRight(text: string) {
    this.context.save();
    this.context.scale(.5, 1);
    this.context.fillText(text, this.size * .95, this.size * .12);
    this.context.restore();
  }

  private drawTriLeft(text: string) {
    this.context.save();
    this.context.scale(1 / 3, 1);
    this.context.fillText(text, this.size * .12, this.size * .12);
    this.context.restore();
  }

  private drawTriHorizontalMiddle(text: string) {
    this.context.save();
    this.context.scale(1 / 3, 1);
    this.context.fillText(text, this.size * .06 + this.size, this.size * .12);
    this.context.restore();
  }

  private drawTriRight(text: string) {
    this.context.save();
    this.context.scale(1 / 3, 1);
    this.context.fillText(text, this.size * 2, this.size * .12);
    this.context.restore();
  }

  private drawTop(text: string) {
    this.context.save();
    this.context.scale(1, .5);
    this.context.fillText(text, this.size * .05, this.size * .18);
    this.context.restore();
  }

  private drawBottom(text: string) {
    this.context.save();
    this.context.scale(1, .5);
    this.context.fillText(text, this.size * .05, this.size * 1.02);
    this.context.restore();
  }

  private drawTriTop(text: string) {
    this.context.save();
    this.context.scale(1, 1 / 3);
    this.context.fillText(text, this.size * .05, this.size * .25);
    this.context.restore();
  }

  private drawTriVerticalMiddle(text: string) {
    this.context.save();
    this.context.scale(1, 1 / 3);
    this.context.fillText(text, this.size * .05, this.size * 1.12);
    this.context.restore();
  }

  private drawTriBottom(text: string) {
    this.context.save();
    this.context.scale(1, 1 / 3);
    this.context.fillText(text, this.size * .05, this.size * 2);
    this.context.restore();
  }

  private drawRing(text: string) {
    this.context.save();
    this.context.scale(1.08, 1.08);
    this.context.fillText(text, this.size * .01, this.size * .07);
    this.context.restore();
  }

  private drawCenter(text: string) {
    this.context.save();
    this.context.scale(.7, .7);
    this.context.fillText(text, this.size * .25, this.size * .3);
    this.context.restore();
  }
}
