/**
 * App entry
 */

import './style.scss';

import * as Clipboard from 'clipboard';
import { GlyphMaker } from './GlyphMaker';


const clipboard = new Clipboard(document.querySelectorAll('.glyph'), {
  text: (trigger) => {
    return trigger.innerText;
  }
});

clipboard.on('success', (e) => {
  e.trigger.classList.add('copy-success');

  setTimeout(() => {
    e.trigger.classList.remove('copy-success');
  }, 300);
});

const glyphMaker: GlyphMaker = new GlyphMaker(<HTMLCanvasElement>document.getElementById('glyph-canvas'));

glyphMaker.on('change:idc', (idc: string) => {
  document.getElementById('idc').innerText = idc;
});

const button = document.getElementById('draw-button');

button.addEventListener('click', () => {
  glyphMaker.drawText(
    (<HTMLInputElement>document.getElementById('block-1')).value,
    (<HTMLInputElement>document.getElementById('block-2')).value,
    (<HTMLInputElement>document.getElementById('block-3')).value
  );
}, false);
