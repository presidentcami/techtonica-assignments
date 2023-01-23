// Add a new List Item
let newListItem = document.createElement('li');
newListItem.textContent = 'A whole lot of love!';
document.querySelector('ul').appendChild(newListItem);

// Add event listener to put a border around the photo
const picBorder = document.querySelector('img');

function addBorder() {
    picBorder.style.border = '5px solid red';
}

picBorder.addEventListener('mouseover', addBorder); 