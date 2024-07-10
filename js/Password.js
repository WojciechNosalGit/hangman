class Passwords {
  #pass;
  #hidenPass;
  #passwords;
  constructor() {
    this.#passwords = [
      { category: 'frazeologizm', text: 'Wyrwać się z matni' },
      { category: 'frazeologizm', text: 'Rzucić rękawicę' },
      { category: 'frazeologizm', text: 'Ślepa uliczka' },
      { category: 'frazeologizm', text: 'Pępek świata' },
      { category: 'frazeologizm', text: 'Wyssać coś z palca' },
      { category: 'frazeologizm', text: 'Zasypać gruszki w popiele' },
      { category: 'frazeologizm', text: 'Przebierać nogami' },
      { category: 'frazeologizm', text: 'Pięta achillesowa' },
      { category: 'frazeologizm', text: 'Wyjść na prostą' },
      { category: 'frazeologizm', text: 'Wpaść w sidła' },
      { category: 'frazeologizm', text: 'Wpaść jak śliwka w kompot' },
      { category: 'frazeologizm', text: 'Mieć muchy w nosie' },
      { category: 'frazeologizm', text: 'Złapać Pana Boga za nogi' },
      { category: 'frazeologizm', text: 'Puścić farbę' },
      { category: 'frazeologizm', text: 'Przebrać miarę' },
      { category: 'frazeologizm', text: 'Przysłowiowe siedem minut' },
      { category: 'frazeologizm', text: 'Strzelić focha' },
      { category: 'frazeologizm', text: 'Pójść na łatwiznę' },
      { category: 'frazeologizm', text: 'Wypaść sroce spod ogona' },
      { category: 'frazeologizm', text: 'Psuć krew' },
      { category: 'frazeologizm', text: 'Mieć kota' },
      { category: 'frazeologizm', text: 'Wyciągnąć kopyta' },
      { category: 'frazeologizm', text: 'Ręka rękę myje' },
      { category: 'frazeologizm', text: 'Uderzyć w stół' },
      { category: 'frazeologizm', text: 'Spać jak zabity' },
      { category: 'frazeologizm', text: 'Wóz albo przewóz' },
      { category: 'frazeologizm', text: 'Pędzić jak na skrzydłach' },
      { category: 'frazeologizm', text: 'Mieć dwie lewe ręce' },
      { category: 'frazeologizm', text: 'Wyskoczyć jak Filip z konopi' },
      { category: 'frazeologizm', text: 'Drzeć koty' },
      {
        category: 'przysłowie',
        text: 'Gdzie kucharek sześć tam nie ma co jeść' /**/,
      },
      { category: 'przysłowie', text: 'Jak sobie pościelisz, tak się wyśpisz' },
      {
        category: 'przysłowie',
        text: 'Kto rano wstaje temu Pan Bóg daje',
      } /**/,
      {
        category: 'przysłowie',
        text: 'Nie taki diabeł straszny jak go malują' /**/,
      },
      { category: 'przysłowie', text: 'Co za dużo to niezdrowo' /**/ },
      {
        category: 'przysłowie',
        text: 'Lepszy wróbel w garści niż gołąb na dachu',
      },
      { category: 'przysłowie', text: 'Z dużej chmury mały deszcz' },
      { category: 'przysłowie', text: 'Apetyt rośnie w miarę jedzenia' },
      { category: 'przysłowie', text: 'Co ma wisieć nie utonie' } /**/,
      { category: 'przysłowie', text: 'Dzieci i ryby głosu nie mają' },
      { category: 'przysłowie', text: 'Głodny jak wilk' },
      {
        category: 'przysłowie',
        text: 'Gdyby kózka nie skakała to by nóżki nie złamała' /**/,
      },
      {
        category: 'przysłowie',
        text: 'Kto mieczem wojuje od miecza ginie',
      } /**/,
      { category: 'przysłowie', text: 'Nie ma dymu bez ognia' },
      {
        category: 'przysłowie',
        text: 'Nosił wilk razy kilka ponieśli i wilka' /**/,
      },
      { category: 'przysłowie', text: 'Cicha woda brzegi rwie' },
      {
        category: 'przysłowie',
        text: 'Kto się śmieje ostatni ten się śmieje najlepiej' /**/,
      },
      { category: 'przysłowie', text: 'Kto pyta nie błądzi' } /**/,
      { category: 'przysłowie', text: 'Mądry Polak po szkodzie' },
      { category: 'przysłowie', text: 'Na bezrybiu i rak ryba' },
      { category: 'przysłowie', text: 'Nie chwal dnia przed zachodem słońca' },
      { category: 'przysłowie', text: 'Co nagle to po diable' } /**/,
      {
        category: 'przysłowie',
        text: 'Prawdziwych przyjaciół poznaje się w biedzie',
      },
      {
        category: 'przysłowie',
        text: 'Złej baletnicy przeszkadza rąbek u spódnicy',
      },
      { category: 'przysłowie', text: 'Gdzie drwa rąbią tam wióry lecą' } /**/,
      { category: 'przysłowie', text: 'Pies ogrodnika' },
      { category: 'przysłowie', text: 'Co się odwlecze to nie uciecze' } /**/,
      { category: 'przysłowie', text: 'Lepiej późno niż wcale' },
      { category: 'przysłowie', text: 'Stara miłość nie rdzewieje' },
      { category: 'film', text: 'Pan Tadeusz' },
      { category: 'film', text: 'Ogniem i mieczem' },
      { category: 'film', text: 'Krzyżacy' },
      { category: 'film', text: 'Potop' },
      { category: 'film', text: 'Czas honoru' },
      { category: 'film', text: 'Wesele' },
      { category: 'film', text: 'Król Lew' },
      { category: 'film', text: 'Matrix' },
      { category: 'film', text: 'Forrest Gump' },
      { category: 'film', text: 'Titanic' },
      { category: 'film', text: 'Incepcja' },
      { category: 'film', text: 'Ojciec chrzestny' },
      { category: 'film', text: 'Szeregowiec Ryan' },
      { category: 'film', text: 'Pulp Fiction' },
      { category: 'film', text: 'Skazani na Shawshank' },
      { category: 'film', text: 'Gladiator' },
      { category: 'film', text: 'Gwiezdne wojny' },
      { category: 'film', text: 'Władca Pierścieni' },
      { category: 'film', text: 'Harry Potter' },
      { category: 'film', text: 'Piraci z Karaibów' },
      { category: 'film', text: 'Indiana Jones' },
      { category: 'film', text: 'Avatar' },
      { category: 'film', text: 'Park Jurajski' },
      { category: 'film', text: 'Psychoza' },
      { category: 'film', text: 'Casablanca' },
      { category: 'film', text: 'Zielona mila' },
      { category: 'film', text: 'Siedem' },
      { category: 'film', text: 'Mroczny rycerz' },
      { category: 'film', text: 'Braveheart' },
      { category: 'znane bydynki', text: 'Wieża Eiffla' },
      { category: 'znane bydynki', text: 'Big Ben' },
      { category: 'znane bydynki', text: 'Koloseum' },
      { category: 'znane bydynki', text: 'Pałac Kultury i Nauki' },
      { category: 'znane bydynki', text: 'Opera w Sydney' },
      { category: 'znane bydynki', text: 'Statua Wolności' },
      { category: 'znane bydynki', text: 'Wielki Mur Chiński' },
      { category: 'znane bydynki', text: 'Katedra Notre-Dame' },
      { category: 'znane bydynki', text: 'Wieża w Pizie' },
      { category: 'znane bydynki', text: 'Burj Khalifa' },
      { category: 'znane bydynki', text: 'Hagia Sophia' },
      { category: 'znane bydynki', text: 'Biały Dom' },
      { category: 'znane bydynki', text: 'Tadź Mahal' },
      { category: 'znane bydynki', text: 'Luwr' },
      { category: 'znane bydynki', text: 'Machu Picchu' },
      { category: 'znane bydynki', text: 'Akropol' },
      { category: 'znane bydynki', text: 'Most Golden Gate' },
      { category: 'znane bydynki', text: 'Kreml' },
      { category: 'znane bydynki', text: 'Bazylika św. Piotra' },
      { category: 'znane bydynki', text: 'Stonehenge' },
      { category: 'znane bydynki', text: 'Sagrada Familia' },
      { category: 'znane bydynki', text: 'Brama Brandenburska' },
      { category: 'znane bydynki', text: 'Times Square' },
      { category: 'znane bydynki', text: 'Pałac Buckingham' },
      { category: 'znane bydynki', text: 'Alhambra' },
      { category: 'znane bydynki', text: 'Mount Rushmore' },
      { category: 'znane bydynki', text: 'Most Rialto' },
      { category: 'znane bydynki', text: 'Czerwony Plac' },
      { category: 'znane bydynki', text: 'Empire State Building' },
      // { category: 'znane bydynki', text: '' },
    ];

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
    hidepass = hidepass.map((letter) =>
      letter === ' ' ? (letter = ' ') : (letter = '_')
    );
    this.#hidenPass = hidepass.join('');
    return this.#hidenPass;
  }

  showCorrectLetter(lettersIdx) {
    if (!lettersIdx) return;
    // Skopiuj ukryte hasło do tablicy
    let currentHiddenPass = this.#hidenPass.split('');

    // Odkryj litery na pozycjach podanych w lettersIdx
    lettersIdx.forEach((idx) => {
      currentHiddenPass[idx] = this.#pass.text[idx];
    });

    // Złącz tablicę z powrotem w string i zwróć
    this.#hidenPass = currentHiddenPass.join('');
    return this.#hidenPass;
  }

  showRandomLetters(number) {
    const letters = [];

    for (let i = 0; i < number; i++) {
      const random = Math.floor(Math.random() * this.pass.text.length);
      const letter = this.pass.text[random].toUpperCase();
      if (letters.includes(letter) || letter === ' ') i--;
      else letters.push(letter);
    }
    // console.log(this.pass.text.length, letters);
    return letters;
  }
}
