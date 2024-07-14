class Draw {
  #chanses;
  constructor(chanses) {
    this.#chanses = chanses;
    this.image = document.querySelector('.img-container img');
    this.gameOverElement = document.querySelector('.game-over-container');
    this.hearts = [...document.querySelectorAll('.heart')];
    // this.hearts = [];
    this.intervalIdx;
  }

  levelsScreen(operator) {
    const levelElement = document.querySelector(operator);
    levelElement.style.display === 'none'
      ? (levelElement.style.display = 'flex')
      : (levelElement.style.display = 'none');
  }

  addPoints(value) {
    const divDOM = document.createElement('div');
    divDOM.textContent = `+${value}`;
    divDOM.classList.add('add-points');
    document.querySelector('.points-container').appendChild(divDOM);
    setTimeout(() => {
      divDOM.remove();
    }, 2000);
  }

  showHangmanImmage(wrong) {
    if (wrong > this.#chanses) return;
    this.image.src = `./img/hangman-img-${wrong}.png`;
  }

  showHarts(chanses) {
    clearInterval(this.intervalIdx);
    document.querySelector('.hearts-container').innerHTML = '';
    this.hearts = [];
    for (let i = 0; i < chanses; i++) {
      const img = document.createElement('img');
      img.classList.add('heart');
      img.src = './img/heart.png';
      this.hearts.push(img);
      document.querySelector('.hearts-container').appendChild(img);
    }

    const randomShake = (time) => {
      const randomTime = Math.floor(Math.random() * (time - 1000) + 1000);
      return randomTime;
    };

    //shake random heart
    const shakeRandomHeart = () => {
      if (this.hearts.length === 0) return;
      const random = Math.floor(Math.random() * this.hearts.length);
      this.hearts.forEach((heart) => heart.classList.remove('shake'));
      this.hearts[random].classList.add('shake');
      //to set deferent time
      clearInterval(this.intervalIdx);
      this.intervalIdx = setInterval(shakeRandomHeart, randomShake(3000));
    };
    this.intervalIdx = setInterval(shakeRandomHeart, randomShake(3000));
  }

  removeHeart() {
    const lastElement = this.hearts[this.hearts.length - 1];
    lastElement.classList.add('lost-heart');
  }

  displayNextRoundWindow(round, category, password) {
    document.querySelector('.next-round-container').classList.add('display');
    document.querySelector('.next-round_title').textContent = `Runda ${round}`;
    document.querySelector(
      '.next-round_category'
    ).textContent = `Kategoria: ${category}`;
    document.querySelector(
      '.next-round_password'
    ).textContent = `Hasło: ${password}`;
  }

  displayGameOverWindow(points, record, password = 'Nie odgadłeś hasła') {
    this.gameOverElement.classList.add('display');

    document.querySelector(
      '.game-over_result'
    ).textContent = `Twój wynik to: ${points}`;
    document.querySelector(
      '.game-over_record'
    ).textContent = `Akutalny rekord: ${record}`;
    document.querySelector(
      '.game-over_password'
    ).textContent = `Hasło: ${password}`;
  }
}
