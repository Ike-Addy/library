const filter = document.getElementById("filter");
const addBookBtn = document.querySelector(".add-btn");
const removeBtn = document.querySelector(".remove-btn");
const editBtn = document.querySelector(".edit-btn");
const modal = document.getElementById("myModal");
const closeModal = document.querySelector(".close");
const submit = document.getElementById("submit");
const form = document.getElementById("new-book");


// Function to create a new book after filling out modal form

    // When user clicks submit after filling out book info, generate a new book
    // on the page with the information entered

        // Create a new card

        // Insert title at top of card with h5

        // Insert author in italics & h6

        // Insert checkbox, editBtn, and removeBtn



// Function to remove book when remove button is clicked

    // Remove card and all styling


// Function to edit existing book when edit button is clicked

    // Open modal

    // Change modal header to "Edit Book"

    // Display current information in input section

    // When user clicks submit, update card with new info


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
