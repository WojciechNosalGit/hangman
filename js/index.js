document
  .querySelector('.easy')
  .addEventListener('click', () => new Game(5, 'easy'));
document
  .querySelector('.medium')
  .addEventListener('click', () => new Game(5, 'medium'));
document
  .querySelector('.hard')
  .addEventListener('click', () => new Game(5, 'hard'));
