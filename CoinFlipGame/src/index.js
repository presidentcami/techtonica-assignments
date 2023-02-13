/* need an event listener for the submit button 
 

 */

const submitButton = document.getElementById('submit');
const headsSelect = document.getElementById('heads').value;
const tailsSelect = document.getElementById('tails').value;

let headTailArray = [headsSelect, tailsSelect];

console.log(headTailArray)

submitButton.addEventListener('click', function(e){
    e.preventDefault();
    /*  on click, flip the coin - so the result section will
show either heads or tails */

    let result;
    let heads = 0;
    let tails = 0;
    x = (Math.floor(Math.random() * 2) == 0);
    if (x) {
       result = "You  got heads!";
       heads ++;
    } else {
        result = "You got tails!";
        tails ++;
    }

    document.getElementById("result").innerHTML = result;

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
})
