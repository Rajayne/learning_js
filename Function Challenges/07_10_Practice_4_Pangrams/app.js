// A pangram is a sentence that contains every letter of the alphabet, like:
//"The quick brown fox jumps over the lazy dog"

// Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet.  Make sure you igore string casing!

// isPangram('The five boxing wizards jump quickly') //true
// isPangram('The five boxing wizards jump quick') //false

function isPangram(str) {
    let lowerCase = str.toLowerCase();
    for (let char of 'abcdefghijklmnopqrstuvwxyz') {
        if (!lowerCase.includes(char)) {
            return false;
        }
    }
    return true;
}

// function isPangram(str) {
//     let lowerCase = str.toLowerCase();
//     for (let char of 'abcdefghijklmnopqrstuvwxyz') {
//         if (lowerCase.indexOf(char) === -1) {
//             return false;
//         }
//     }
//     return true;
// }

//     const alphabet = 'abcdefghijklmnopqrstuvwxyz'
//     let isPangram = false

//     let filteredAlphabet = alphabet.split("").filter(letter => {
//         if (str.includes(letter).toLowerCase()) {
//             return letter;
//         }
//     })

//     if (filteredAlphabet.length === 26) {
//         isPangram = true;
//     }

//     return isPangram;
// }


