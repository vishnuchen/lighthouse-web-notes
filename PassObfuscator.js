let providedPassword = process.argv[2];

function obfuscate(password) {
  let obfuscated = "";
  for (i = 0; i < password.length; i++) {
    let letter = password[i];
    if (letter === "a") {
      letter = "4";
    }
    if (letter === "e") {
      letter = "3";
    }
    if (letter === "o") {
      letter = "0";
    }
    if (letter === "l") {
      letter = "1";
    }
    obfuscated = obfuscated + letter;
  }
  return obfuscated;
}
console.log(obfuscate(providedPassword));