/* need an event listener for the submit button 
 on click, flip the coin - so the result section will
show either true or false. the result should also check
if the coin flip matched the answer, and the answer will
say something like 'correct it's heads' or 'eh, wrong'

 */

const submitButton = document.getElementById('submit');
const headsSelect = document.getElementById('heads').value;
const tailsSelect = document.getElementById('tails').value;

// let headTailArray = [headsSelect, tailsSelect];
console.log(headsSelect)
console.log(tailsSelect)


// console.log(headsOrTails)

// submitButton.addEventListener('click', function(){

//     function retrieveFormValue() {
//         // let headsOrTails = '';
//         for (i = 0; i < headTailArray.length; i++) {
//             if (headTailArray[i].checked) {
//                 console.log(headTailArray[i].value)

//                 // headsOrTails = headTailArray[i].value;
//             }
//         }
//     }
// })