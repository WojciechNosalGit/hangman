class Keyboard {
  #lettersABCD;
  #lettersElements;
  constructor() {
    this.#lettersABCD =
      'a, ą, b, c, ć, d, e, ę, f, g, h, i, j, k, l, ł, m, n, o, ó, p, q, r, s, ś, t, u, v, w, x, y, z, ź, ż'
        .toUpperCase()
        .split(',');

    this.#lettersElements = this.createLettersElements();
  }

  get lettersElements() {
    return this.#lettersElements;
  }

  createLettersElements() {
    const elements = [];
    this.#lettersABCD.forEach((letter) => {
      const letterElement = document.createElement('div');
      letterElement.classList.add('keyboard-letter');
      letterElement.textContent = letter;
      elements.push(letterElement);
    });
    return elements;
  }

  clicked() {
    this.classList.add('clicked');
  }

  getKeyboard() {
    document.querySelector('.letters-container').textContent = '';
    this.#lettersElements.forEach((elem) => {
      elem.classList.remove('clicked');
      elem.removeEventListener('click', this.clicked);
      elem.addEventListener('click', this.clicked);
      document.querySelector('.letters-container').appendChild(elem);
    });
  }
}
