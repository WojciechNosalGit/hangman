class Keyboard {
  #letters;
  #lettersElements;
  constructor() {
    this.#letters =
      'a, ą, b, c, ć, d, e, ę, f, g, h, i, j, k, l, ł, m, n, ń, o, ó, p, q, r, s, ś, t, u, v, w, x, y, z, ź, ż'
        .toUpperCase()
        .split(',');

    this.#lettersElements = this.createLettersElements();
  }

  get lettersElements() {
    return this.#lettersElements;
  }

  createLettersElements() {
    const elements = [];
    this.#letters.forEach((letter) => {
      const letterElement = document.createElement('div');
      letterElement.classList.add('keyboard-letter');
      letterElement.textContent = letter.trim();
      elements.push(letterElement);
    });
    return elements;
  }

  getKeyboard(clickedLetters = []) {
    //every time generate new keyboard and add class to clicked letters
    document.querySelector('.letters-container').textContent = '';
    this.#lettersElements.forEach((elem) => {
      if (clickedLetters.length === 0) {
        elem.classList.remove('clicked');
      }
      if (elem.textContent === clickedLetters[clickedLetters.length - 1])
        elem.classList.add('clicked');

      document.querySelector('.letters-container').appendChild(elem);
    });
  }
}
