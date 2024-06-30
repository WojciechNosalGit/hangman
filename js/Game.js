//dodanie przyciusku 'odgaduję'
// dodanie powitalnego okna
//stworzenie grafiki wisielca

class Game {
  #chanses;
  #passwordArea;
  #pointsArea;
  constructor(chanses) {
    this.#chanses = chanses;
    this.#pointsArea = document.querySelector('.points');
    this.roundArea = document.querySelector('.round');
    this.recordArea = document.querySelector('.record');
    this.categoryArea = document.querySelector('.category');
    this.#passwordArea = document.querySelector('.password');

    this.password = new Passwords();
    this.keyboard = new Keyboard();
    this.stats = new Statistics(this.#chanses);
    this.draw = new Draw(this.#chanses);

    this.currentPass = this.password.pass.text;
    this.currentCategory = this.password.pass.category;
    this.clickedLetters = [];

    this.keyboard.lettersElements.forEach((item) => {
      item.addEventListener('click', (e) => this.checkLetter(e));
    });

    document
      .querySelector('button.start-new-game')
      .addEventListener('click', () => {
        document
          .querySelector('.game-over-container')
          .classList.remove('display');
        new Game(5);
      });

    document
      .querySelector('.start-next-round')
      .addEventListener('click', () => {
        document
          .querySelector('.next-round-container')
          .classList.remove('display');
      });

    this.sound('start-game-sound');
    this.render();
  }
  // On letter click
  checkLetter(e) {
    const letter = e.target.textContent.trim();
    // if clicked
    if (this.clickedLetters.includes(letter)) return;
    this.clickedLetters.push(letter);

    const indexes = this.getCorrectLetterIndexInPass(letter);

    //if correct letter
    if (
      this.stats.chechWin(indexes) === true &&
      this.stats.getChansesLeft() !== 0
    ) {
      this.handleCorrectGeuss(indexes);

      //if incorrect letter
    } else {
      this.handleIncorrectGuess();
    }
  }

  getCorrectLetterIndexInPass(letter) {
    const indexes = [];
    this.currentPass
      .toUpperCase()
      .split('')
      .forEach((elem, idx) => {
        if (elem === letter) indexes.push(idx);
      });
    return indexes;
  }

  handleCorrectGeuss(indexes) {
    const points = indexes.length;
    this.sound('click-sound');
    this.draw.addPoints(points);
    this.#pointsArea.textContent = this.stats.addPoints(points);
    this.#passwordArea.textContent = this.password.showCorrectLetter(indexes);

    //next round
    if (this.currentPass === this.password.hidePass) {
      this.nextRound(points);
    }
  }

  handleIncorrectGuess() {
    this.sound('lost-chanse-sound');
    this.stats.addWrongs();
    this.draw.showHangmanImmage(this.stats.wrongs);
    this.draw.removeHeart();
    //wait for removeHaert animation end
    setTimeout(() => {
      this.draw.showHarts(this.stats.getChansesLeft());
    }, 600);

    //Game over
    if (this.stats.wrongs === this.#chanses) {
      setTimeout(() => {
        this.gameOver();
      }, 1500);
    }
  }

  nextRound(value) {
    this.sound('next-round-sound');
    //displayWindow
    this.draw.displayNextRoundWindow(
      this.stats.round,
      this.currentCategory,
      this.currentPass
    );
    this.stats.addRound();
    this.stats.addPoints(100);
    this.draw.addPoints(100 + value);
    this.resetPassword();
    this.render();
  }

  resetPassword() {
    this.password = new Passwords(); // Create a new instance of Passwords
    this.currentPass = this.password.pass.text; // Assign a new password
    this.currentCategory = this.password.pass.category; // Asign a new category
  }

  gameOver() {
    this.sound('game-over-sound');
    this.draw.displayGameOverWindow(
      this.stats.points,
      this.stats.getRecord(),
      this.currentPass
    );
  }

  sound(selector) {
    const clickSound = document.getElementById(selector);
    clickSound.play();
  }

  render() {
    this.clickedLetters = [];
    this.recordArea.textContent = `RECORD: ${this.stats.getRecord() || 0}`;
    this.roundArea.textContent = `Runda ${this.stats.round}`;
    this.categoryArea.textContent = `Kategoria: ${this.currentCategory}`;

    this.#passwordArea.textContent = this.password.hidePass;
    this.#pointsArea.textContent = this.stats.points;
    this.draw.showHangmanImmage(this.stats.wrongs);
    this.draw.showHarts(this.stats.getChansesLeft());
    this.keyboard.getKeyboard();
  }
}
