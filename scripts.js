const filter = document.getElementById("filter");
const addBookBtn = document.querySelector(".add-btn");
const removeBtn = document.querySelector(".remove-btn");
const editBtn = document.querySelector(".edit-btn");
const modal = document.getElementById("myModal");
const closeModal = document.querySelector(".close");
const submit = document.getElementById("submit");
const form = document.getElementById("new-book");

submit.addEventListener('click', newBook);

// Function to add new book
function newBook(e) {
// Prevent submit button from reloading page 
    e.preventDefault();
// Create a div with a class called card and a width of 30rem
    const newCard = document.createElement('div');
    newCard.className = 'card';
    newCard.style.width = '30rem';
// Store the new card inside the body container
    const cardsContainer = document.querySelector(".body-container");
    cardsContainer.appendChild(newCard);
// Create another div inside the card div called cardBody
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
// Inside the card body, add the book title with an h5 header
    const form = document.getElementById('new-book');
    
    newCard.textContent = form.elements['title'].value;
// Inside the card body, add the author with h6 and italics
   

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
