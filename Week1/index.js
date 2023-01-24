// Add a new List Item
let newListItem = document.createElement('li');
newListItem.textContent = 'A whole lot of love!';
document.querySelector('ul').appendChild(newListItem);

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
const hyperLinks = document.querySelector('a');

function changeColor() {
    hyperLinks.style.color = 'white';
}
hyperLinks.addEventListener('click', changeColor);