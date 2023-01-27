// Add a new List Item

// ****** THE COMMENTED OUT CODE & PSUEDOCODE WAS NOT WORKING ******
// let newListItem = document.createElement('li');
// newListItem.classList.add("ingredients");
// newListItem.textContent = 'A whole lot of love!';
// checkbox.value = newListItem;
// make a new element with type checkbox
// add that to newListItem with appendchild to newlistitem
// class list to make newListItem.classList.add("ingredients")
// checkbox.appendChild(newListItem);

let checkbox = document.createElement('input');
checkbox.type = "checkbox";
let label = document.createElement('label');
label.appendChild(document.createTextNode("A whole lot of love!"));
document.getElementById('ingredientsChecklist').appendChild(checkbox);
document.getElementById('ingredientsChecklist').appendChild(label);


// Add event listener to put a border around the photo
const picBorder = document.querySelector('img');

function addBorder() {
    if (!picBorder.style.border) {
    picBorder.style.border = '5px solid red';
    } else {
    picBorder.style.border = '';
    }
    // console.log(picBorder.style.border);
}

picBorder.addEventListener('click', addBorder); 

// Attempt to change the color of the text on click for links
// const hyperLinks = document.querySelectorAll('.links');

// function mouseoverLink (textColor) {
//     textColor = 'white';
//     hyperLinks.style.color = textColor;
//     console.log("we changed the color of text")
// }

// function linksListener(hyperLink) {
//     hyperLink.addEventListener('mouseover', mouseoverLink)
// }

// hyperLinks.forEach(linksListener)

// change function
// function changeLinkColor (arrayOfLinks) {
//     for (let i = 0; i < arrayOfLinks.length; i++) {
//         arrayOfLinks.addEventListener('click', () => {
//             arrayOfLinks[i].style.color = 'white';
//         })
//     }
// }

// changeLinkColor(hyperLinks);

// make a for loop to go thru each hyperlink, to each link add event listener
// hyperLinks.addEventListener('click', function(){
//     for (let i = 0; i < hyperLinks.length; i++) {
//         hyperLinks[i].style.color = 'white';
// });