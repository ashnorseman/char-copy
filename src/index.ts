/**
 * App entry
 */

import './style.scss';

import * as Clipboard from 'clipboard';

const clipboard = new Clipboard(document.querySelectorAll('li'), {
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
