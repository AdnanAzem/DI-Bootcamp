// Daily challenge: Play with words

// 1st daily challenge

// Create two functions. Each function should return a promise.

// The first function called makeAllCaps(), takes an array of words as an argument
//     If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
//     else, reject the promise with a reason.
const makeAllCaps = (words) => {
    return new Promise((resolve, reject) => {
        if (words.every(word => typeof word === 'string')) {
            resolve(words.map(word => word.toUpperCase()));
        } else {
            reject("Not all words are strings");
        }
    });
}

// The second function called sortWords(), takes an array of words uppercased as an argument
//     If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
//     else, reject the promise with a reason.

const sortWords = (words) => {
    return new Promise((resolve, reject) => {
        if (words.length > 4) {
            resolve(words.sort());
        } else {
            reject("Not enough words");
        }
    });
}

//in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, you should see in the console, 
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
      .catch(error => console.log(error))


//   2nd daily challenge
const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`

//   Create three functions. The two first functions should return a promise..

//  The first function is named toJs():
//     this function converts the morse json string provided above to a morse javascript object.
//     if the morse javascript object is empty, throw an error (use reject)
//     else return the morse javascript object (use resolve)

const toJs = () => {
    return new Promise((resolve, reject) => {
        if (Object.keys(morse).length === 0) {
            reject("morse is empty");
        } else {
            resolve(JSON.parse(morse));
        }
    });
}

//  The second function called toMorse(morseJS), takes one argument: the new morse javascript object.
//     This function asks the user for a word or a sentence.
//     if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
//     else return an array with the morse translation of the user’s word.

const toMorse = (morseJS) => {
    return new Promise((resolve, reject) => {
        let word = prompt("Enter a word or a sentence");
        let arr = [];
        for (let i = 0; i < word.length; i++) {
            if (morseJS[word[i]] === undefined) {
                reject("Character does not exist in morse");
            } else {
                arr.push(morseJS[word[i]]);
            }
        }
        resolve(arr);
    });
}

//  The third function called joinWords(morseTranslation), takes one argument: the morse translation array
//     this function joins the morse translation by using line break and display it on the page (ie. On the DOM)

const joinWords = (morseTranslation) => {
    document.write(morseTranslation.join("<br>"));
}

// Chain the three functions.

toJs()
    .then((morseJS) => toMorse(morseJS))
    .then((morseTranslation) => joinWords(morseTranslation))
    .catch(error => console.log(error));