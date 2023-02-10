/* need an event listener for the submit button 
 

 */

const headsSelect = document.getElementById('heads').value;
const tailsSelect = document.getElementById('tails').value;

// let headTailArray = [headsSelect, tailsSelect];

// console.log(headTailArray)

let game = document.forms[0];

game.addEventListener('submit', function(e){
    e.preventDefault();
    /*  on click, flip the coin - so the result section will
show either heads or tails */
    let result;
    let heads = 0;
    let tails = 0;
    x = (Math.floor(Math.random() * 2) == 0);
    if (x) {
        result = headsSelect;
    //    result = "You  got heads!";
       heads ++;
    } else {
        result = tailsSelect;
        // result = "You got tails!";
        tails ++;
    }

    let resultSection = document.getElementsByClassName('result')[0];
    resultSection.innerHTML = `Heads: ${heads} Tails: ${tails}`

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
})
