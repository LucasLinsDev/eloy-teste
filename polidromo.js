function polidromo(palavra) {
  let letters = palavra.toUpperCase().split("");

  max = letters.length - 1;
  min = 0;

  while (max > -1) {
    if (letters[max] != letters[min]) {
      return console.log(false);
    }
    max--;
    min++;
  }
  max == -1 ? console.log(true) : console.log(false);
}

polidromo("Amor a Romasdfd");
