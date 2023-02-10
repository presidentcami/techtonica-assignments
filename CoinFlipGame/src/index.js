/* need an event listener for the submit button 
 

 */

const headsSelect = document.getElementById('heads').value;
const tailsSelect = document.getElementById('tails').value;

let choice = document.getElementsByName('headsortails')
let choiceHeads = choice[0].value;
let choiceTails = choice[1].value;

console.log(headsSelect, tailsSelect)
console.log(choice)
console.log(choiceHeads, choiceTails)
// let headTailArray = [headsSelect, tailsSelect];

// console.log(headTailArray)


let game = document.forms[0];



game.addEventListener('submit', function(e){
    e.preventDefault();
    
    let personChoice = 0;

    if (headsSelect === choiceHeads) {
        personChoice = 1;
    } else if (tailsSelect === choiceTails) {
        personChoice = 2;
    }
    console.log(personChoice)

    let result;
    if (personChoice > 0) {
        let random = Math.floor(Math.random() * 2) + 1;

        if (random == 1) {
            result = 'heads';
        } else {
            result = 'tails';
        }

        console.log(result)
    }


//     if (personChoice > 0) {
//         if (personChoice === 1) {
//             console.log(personChoice)
//             if (result === personChoice) {
//                 console.log(result, personChoice)
//                 // alert(`The flip was ${result} and you chose ${headsSelect}!`) 
//             } else {
//                 console.log(result, personChoice)

//                 // alert(`The flip was ${result} and you chose ${tailsSelect}!`)
//             }
//         } else  if (personChoice === 2) { 
//             console.log(personChoice)
//             if (result === tailsSelect) {
//                 console.log(result, personChoice)

//                 // alert(`The flip was ${result} and you chose ${tailsSelect}!`)
//             } else {
//                 console.log(result, personChoice)

//                 // alert(`The flip was ${result} and you chose ${headsSelect}!`)
//             }
//         }
// }
    // let result = document.getElementsByClassName('result')[1];
    // let tailsResult = document.getElementsByClassName('result')[2];


    

    //  let heads = 0;
    //  let tails = 0;
//      x = (Math.floor(Math.random() * 2) == 0);
//         if (x) {

//      //    result = "You  got heads!";
//         // heads ++;
//      } else {
//         result = 'tails';
//          // result = "You got tails!";
//         //  tails ++;
//      }

//      if
 
//   console.log(heads)
//      console.log(tails) 
})


    /*  on click, flip the coin - so the result section will
show either heads or tails */
    // let result;
   /* let heads = 0;
    let tails = 0;
    x = (Math.floor(Math.random() * 2) == 0);
       if (x) {
        // result = headsSelect;
    //    result = "You  got heads!";
       heads ++;
    } else {
        // result = tailsSelect;
        // result = "You got tails!";
        tails ++;
    }

 console.log(heads)
    console.log(tails) */

    // let resultSection = document.getElementsByClassName('result')[0];
    // resultSection.innerHTML = `Heads: ${heads} Tails: ${tails}`

    // document.getElementById("result").innerHTML = result;
    // console.log(heads, tails)
    // function retrieveFormValue() {
    //     // let headsOrTails = '';
    //     for (i = 0; i < headTailArray.length; i++) {
    //         if (headTailArray[i].checked) {
    //             console.log(headTailArray[i].value)

    //             // headsOrTails = headTailArray[i].value;
    //         }
    //     }
    // }

    /* the result should also check
        if the coin flip matched the answer, and the answer will
    say something like 'correct it's heads' or 'eh, wrong' */
