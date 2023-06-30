const filter = document.getElementById("filter");
const addBookBtn = document.querySelector(".add-btn");
const removeBtn = document.querySelector(".remove-btn");
const editBtn = document.querySelector(".edit-btn");
const modal = document.getElementById("myModal");
const closeModal = document.querySelector(".close");
const submit = document.getElementById("submit");
const form = document.getElementById("new-book");

submit.addEventListener('click', newBook);

let myLibrary = [];

function Book(title, author, description) {
 this.getTitle =  function() {
    let title = document.getElementById('title')
    return title.value
 }
}

function addBookToLibrary() {
  // do stuff here
}



// Function to remove book when remove button is clicked



// Function to edit existing book when edit button is clicked


// Function to show book typed in search bar


// START of modal functionality
// When the user clicks the button, open the modal 
addBookBtn.onclick = function() {
    modal.style.display = "block";
}  
// When the user clicks on <span> (x), close the modal
closeModal.onclick = function() {
    modal.style.display = "none";
}  
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
}
// END of modal functionality
