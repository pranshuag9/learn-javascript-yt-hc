// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

const myStates = [
    "Delhi",
    "Rajasthan",
    "Assam",
    1947,
    "Tamil Nadu",
    "Maharashtra"
];
// // FOR LOOP -----------------------------------------------------------------
// for (let i = 0; i < myStates.length; i++) {
//     if (typeof myStates[i] !== 'string') continue;
//     if (myStates[i] === 'Tamil Nadu') break;
//     console.log(myStates[i]);
// }

// // WHILE LOOP ---------------------------------------------------------------
// let i = 0;
// while (i < myStates.length) {
//     console.log(myStates[i]);
//     i++;
// }

// DO WHILE LOOP ------------------------------------------------------------
let i = 0;
do{
    console.log(myStates[i]);
    i++;
}while(i > 10);