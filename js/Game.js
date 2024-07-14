// points depend on level
// choose levels during the game
// othet sidgn in password
// issue wuth one shake heart
// make better css

class Game {
  #chanses;
  #passwordArea;
  #pointsArea;
  constructor(chanses, level) {
    this.level = level;
    //easy, medium, hard
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
    this.startRound = true;
    document.querySelector('.start-game-container').style.display = 'none';

    this.eventInit();
    this.render(level);
    this.sound('start-game-sound');
  }

  eventInit() {
    this.keyboard.lettersElements.forEach((item) => {
      item.addEventListener('click', (e) => this.checkLetter(e));
    });

    document
      .querySelector('button.start-new-game')
      .addEventListener('click', () => {
        document
          .querySelector('.game-over-container')
          .classList.remove('display');
        new Game(5, this.level);
      });

    document
      .querySelector('.start-next-round')
      .addEventListener('click', () => {
        document
          .querySelector('.next-round-container')
          .classList.remove('display');
      });
  }

  // On letter click
  checkLetter(e) {
    function typeOfLetter() {
      if (typeof e === 'string') return e.toUpperCase();
      else return e.target.textContent.trim();
    }
    const letter = typeOfLetter();
    const indexes = this.getCorrectLetterIndexInPass(letter);

    // if clicked
    if (this.clickedLetters.includes(letter)) return;
    this.clickedLetters.push(letter);

    this.keyboard.getKeyboard(this.clickedLetters);

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
    this.#passwordArea.textContent = this.password.showCorrectLetter(indexes);
    if (this.startRound) return; // don't push points at the start of the round
    const points = indexes.length;
    this.sound('click-sound');
    this.draw.addPoints(points);
    this.#pointsArea.textContent = this.stats.addPoints(points);
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
    this.startRound = true; // next round true

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

  runLevel() {
    console.log(this.currentPass);
    // chcek how many letter can see
    const stillHidenPasswordLength = () => {
      let number = 0;
      for (let i = 0; i < this.#passwordArea.textContent.length - 1; i++) {
        this.#passwordArea.textContent[i] !== '_' &&
        this.#passwordArea.textContent[i] !== ''
          ? number++
          : number;
      }
      return number;
    };
    const letters = this.password.showRandomLetters(6); //arr with random letters from password. Don't need more then 6
    const level = () => {
      if (this.level === 'easy') return 0.6;
      else if (this.level === 'medium') return 0.3;
      else return 0;
    };
    const maxShowedSymbols = Math.ceil(this.currentPass.length * level());

    letters.forEach((letter) => {
      console.log(this.currentPass.length, maxShowedSymbols);
      if (stillHidenPasswordLength() >= maxShowedSymbols) return;
      //if we don't see enough letter try one more
      this.checkLetter(letter);
    });
    this.startRound = false; // add points during the round after level start
  }

  render() {
    this.clickedLetters = [];
    this.keyboard.getKeyboard();
    this.recordArea.textContent = `RECORD: ${this.stats.getRecord() || 0}`;
    this.roundArea.textContent = `Runda ${this.stats.round}`;
    this.categoryArea.textContent = `Kategoria: ${this.currentCategory}`;
    this.#passwordArea.textContent = this.password.hidePass;
    this.#pointsArea.textContent = this.stats.points;
    this.draw.showHangmanImmage(this.stats.wrongs);
    this.draw.showHarts(this.stats.getChansesLeft());
    this.runLevel();
  }
}
