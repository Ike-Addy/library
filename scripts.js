const filter = document.getElementById("filter");
const addBookBtn = document.querySelector(".add-btn");
const removeBtn = document.querySelector(".remove-btn");
const editBtn = document.querySelector(".edit-btn");
const modal = document.getElementById("myModal");
const closeModal = document.querySelector(".close");
const submit = document.getElementById("submit");
const bookForm = document.getElementById('new-book');


bookForm.addEventListener('submit', newBook);

// Function to add new book
function newBook(e) {
    // Prevent submit button from reloading page 
    e.preventDefault();

    // Create a div with a class called card and a width of 30rem
    const newCard = document.createElement('div');
    newCard.className = 'card';

    // Stores the new card inside the body container
    const cardsContainer = document.querySelector(".body-container");
    cardsContainer.appendChild(newCard);

    // Creates another div inside the card div called cardBody to store and style card contents
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    newCard.appendChild(cardBody);

    // Get the field values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const description = document.getElementById('description').value;

    // Create text nodes
    const titleTextNode = document.createTextNode(title);
    const authorTextNode = document.createTextNode(author);
    const descriptionTextNode = document.createTextNode(description);

    // Append text nodes to the cardBody element
    cardBody.appendChild(titleTextNode);
    cardBody.appendChild(authorTextNode);
    cardBody.appendChild(descriptionTextNode);

    // Containers to store text for styling
    const titleStyles = document.createElement('div');
    titleStyles.className = 'title'
    titleStyles.appendChild(title);
    
    const authorStyles = document.createElement('div');
    authorStyles.className = 'author'
    authorStyles.appendChild(title);

    const descriptionStyles= document.createElement('div')
    descriptionStyles.className = 'description'
    descriptionStyles.appendChild(title);
}


// Inside the card body, add the book title with an h5 header
    // Get the form from the DOM
    // Input the input value of the title into the card
    
    // Set the styling of the title to h5
    
// Inside the card body, add the author with h6 and italics



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
