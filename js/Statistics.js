class Statistics {
  #wrongs;
  #points;
  constructor(chanses = 1) {
    this.#points = 0;
    this.#wrongs = 0;
    this.chanses = chanses;
    this.round = 1;
  }
  get points() {
    return this.#points;
  }
  get wrongs() {
    return this.#wrongs;
  }

  chechWin(indexes) {
    let isWin = true;
    indexes.length === 0 ? (isWin = false) : isWin;
    return isWin;
  }

  addWrongs() {
    return ++this.#wrongs;
  }

  addPoints(number = 0) {
    this.#points += number;
    this.getRecord();
    return this.#points;
  }

  resetPoints() {
    this.#points = 0;
  }

  getChansesLeft() {
    return this.chanses - this.#wrongs;
  }

  addRound() {
    return this.round++;
  }

  getRecord() {
    const record = localStorage.getItem('record');

    if (record < this.#points) {
      localStorage.setItem('record', this.#points);
    } else {
      record;
    }
    return record;
  }
}
