// Write a getCard() function which returns a random playing card object, like:
// 		{
// 			value: 'K'
// 			suit: 'clubs'
// 		}
//Pick a random value from:
//----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
//Pick a random suit from:
//----clubs,spades, hearts, diamonds
//Return both in an object

// function getCard() {

//     const values = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
//     const valIndx = Math.floor(Math.random() * values.length);
//     const value = values[valIndx];
    

//     const suits = ['Diamonds','Hearts','Clubs','Spades']
//     const suitIndx = Math.floor(Math.random() * suits.length);
//     const suit = suits[suitIndx];

//     console.log(value,suit);
//     // return `Value: ${value} Suit: ${suit}`
// }

function pick(arr) {
    const indx = Math.floor(Math.random() * arr.length);
    return arr[indx];
}

function getCard() {
    const values = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
    const value = pick(values);
    const suits = ['Diamonds','Hearts','Clubs','Spades']
    const suit = pick(suits);

    return {value: pick(values), suit: pick(suits)};
}

// switch(value) {
//     case 1: 
//         return 'A';
//         break;
//     case 2: 
//         return 2;
//         break;
//     case 3: 
//         return 3;
//         break;
//     case 4: 
//         return 4;
//         break;
//     case 5: 
//         return 5;
//         break;
//     case 6: 
//         return 6;
//         break;
//     case 7: 
//         return 7;
//         break;
//     case 8: 
//         return 8;
//         break;
//     case 9: 
//         return 9;
//         break;
//     case 10: 
//         return 10;
//         break;
//     case 11: 
//         return 'J';
//         break;
//     case 12: 
//         return 'Q';
//         break;
//     case 13: 
//         return 'K';
//         break;
// }

// switch(suit) {
//     case 1:
//         return 'Diamonds';
//         break;
//     case 2:
//         return 'Hearts';
//         break;
//     case 3:
//         return 'Clubs';
//         break;
//     case 4:
//         return 'Spades';
//         break;
// }
