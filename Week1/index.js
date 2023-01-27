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

// make a button
// accessing the div that the button will be attached to
let instructionsDiv = document.getElementById("instructions");
// creating the button
let button = document.createElement("button")
// creating text to be displayed on button
button.innerText = "Excellent Work!"

// apply styles the button
// have to set a class attribute to it then go to styles and make that class
button.setAttribute("class", "button");

// add event listener so clicking button takes you to a gif
button.addEventListener("click", () => {
    window.open("https://media0.giphy.com/media/Zvt900PrtpL1CC7rml/giphy.gif?cid=ecf05e47ntll4m95y4yhsnm0ptnl66nrvn3899r3bu5c13sv&rid=giphy.gif&ct=g", '_blank');
})

// append button to div
instructionsDiv.appendChild(button)



