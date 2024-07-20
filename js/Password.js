class Passwords {
  #pass;
  #hidenPass;
  #passwords;
  constructor() {
    this.#passwords = slogans;
    this.#pass = this.getPasswordObject();
    this.#hidenPass = this.hidePassword();
  }

  get pass() {
    return this.#pass;
  }

  get hidePass() {
    return this.#hidenPass;
  }

  getPasswordObject() {
    const random = Math.floor(Math.random() * this.#passwords.length);
    return this.#passwords[random];
  }

  hidePassword() {
    let hidepass = this.#pass.text.split('');
    hidepass = hidepass.map((letter) => {
      if (letter === ' ') letter = ' ';
      else if (letter === ',') letter = ',';
      else if (letter === '.') letter = '.';
      else letter = '_';
      return letter;
    });
    this.#hidenPass = hidepass.join('');
    return this.#hidenPass;
  }

  showCorrectLetter(lettersIdx) {
    if (!lettersIdx) return;
    // copy hide pass to arr
    let currentHiddenPass = this.#hidenPass.split('');

    //Display letters at the positions given in lerrersIdx
    lettersIdx.forEach((idx) => {
      currentHiddenPass[idx] = this.#pass.text[idx];
    });

    // Attach the arr back into string and return
    this.#hidenPass = currentHiddenPass.join('');
    return this.#hidenPass;
  }

  showRandomLetters(number) {
    const letters = [];
    let blockInfiniteLoop = 40;

    for (let i = 0; i < number; i++) {
      blockInfiniteLoop--;
      if (!blockInfiniteLoop) break; // need to block infinite loop when password has less letters then number parameter
      const random = Math.floor(Math.random() * this.pass.text.length);
      const letter = this.pass.text[random].toUpperCase();
      if (
        letters.includes(letter) ||
        letter === ' ' ||
        letter === '.' ||
        letter === ','
      )
        i--;
      else letters.push(letter);
    }
    return letters;
  }
}
