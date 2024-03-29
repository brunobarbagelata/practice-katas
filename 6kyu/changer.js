// Create a function that takes a string as a parameter and does the following, in this order:

// Replaces every letter with the letter following it in the alphabet (see note below)
// Makes any vowels capital
// Makes any consonants lower case
// Note:

// the alphabet should wrap around, so Z becomes A
// in this kata, y isn't considered as a vowel.
// So, for example the string "Cat30" would return "dbU30" (Cat30 --> Dbu30 --> dbU30)

function changer(str) {
  let arr = str
    .split("")
    .map(function (item) {
      if (
        (item.charCodeAt() >= 65 && item.charCodeAt() <= 90) ||
        (item.charCodeAt() >= 97 && item.charCodeAt() <= 122)
      ) {
        let result = String.fromCharCode(
          ((item.toLowerCase().charCodeAt() - 96) % 26) + 97
        );
        if ("aeiou".includes(result)) {
          return result.toUpperCase();
        } else {
          return result;
        }
      } else {
        return item;
      }
      return item.toLowerCase().charCodeAt();
    })
    .join("");
  console.log(str, arr);
  return arr;
}

//best code:

// const changer = str =>
//   str
//     .toLowerCase()
//     .replace(/[a-z]/g, m => String.fromCharCode((m.charCodeAt(0) - 96) % 26 + 97))
//     .replace(/[aeiou]/g, m => m.toUpperCase())
