// Load data from local storage
window.onload = loadFromLocalStorage;

// Function to submit form and store data in local storage
function validateForm() {
    console.log('Validating form...');
    document.querySelectorAll('.error').forEach(error => error.textContent = '');

    let isValid = true;

    const recipeName = document.getElementById('recipeName').value.trim();
    const recipeImage = document.getElementById('recipeImage').value.trim();
    const cookieType = document.getElementById('cookieType').value.trim();
    const servingSize = document.getElementById('servingSize').value;
    const ingredients = document.getElementById('ingredients').value.trim();
    const instructions = document.getElementById('instructions').value.trim();

    if (!recipeName) {
        console.log('Name is required');
        document.getElementById('nameError').textContent = 'Name is required';
        isValid = false;
    }

    if (!recipeImage) {
        console.log('Image is required');
        document.getElementById('imageError').textContent = 'Image is required';
        isValid = false;
    }

    if (!cookieType) {
        console.log('Type is required');
        document.getElementById('typeError').textContent = 'Type is required';
        isValid = false;
    }

    if (!ingredients) {
        console.log('Ingredients are required');
        document.getElementById('ingredientsError').textContent = 'Ingredients are required';
        isValid = false;
    }

    if (isValid) {
        // Save data to local storage
        console.log('Form is valid. Saving data to local storage.');
        saveToLocalStorage();

        // Clear the form
        console.log('Clearing form...');
        resetForm();
    } else {
        console.log('Form validation failed.');
    }
}

// Function to reset the form fields
function resetForm() {
    console.log('Resetting form fields...');
    const fieldsToReset = ['recipeName', 'recipeImage', 'cookieType', 'servingSize', 'ingredients', 'instructions'];

    // Reset values in the form
    fieldsToReset.forEach(field => {
        document.getElementById(field).value = '';
    });

    // Clear the ingredient and instruction lists
    console.log('Clearing ingredient and instruction lists...');
    const ingredientList = document.getElementById('ingredientList');
    while (ingredientList.firstChild) {
        ingredientList.removeChild(ingredientList.firstChild);
    }

    const instructionList = document.getElementById('instructionList');
    while (instructionList.firstChild) {
        instructionList.removeChild(instructionList.firstChild);
    }

    // Clear local storage
    console.log('Clearing local storage...');
    localStorage.removeItem('formData');

    // Clear the textareas
    console.log('Clearing textareas...');
    document.getElementById('ingredients').value = '';
    document.getElementById('instructions').value = '';
}


// Function to add an ingredient
function addIngredient() {
    console.log('Adding ingredient...');
    const ingredientsTextarea = document.getElementById('ingredients');
    const newIngredient = ingredientsTextarea.value.trim();

    if (newIngredient) {
        // Append a new paragraph element for the added ingredient
        const ingredientList = document.getElementById('ingredientList');
        const newParagraph = document.createElement('p');
        newParagraph.textContent = newIngredient;
        ingredientList.appendChild(newParagraph);

        // Clear the textarea
        ingredientsTextarea.value = '';

        // Save data to local storage when an ingredient is added
        console.log('Saving data to local storage after adding ingredient.');
        saveToLocalStorage();
    }
}

// Function to add an instruction
function addInstruction() {
    console.log('Adding instruction...');
    const instructionsTextarea = document.getElementById('instructions');
    const newInstruction = instructionsTextarea.value.trim();

    if (newInstruction) {
        // Append a new paragraph element for the added instruction
        const instructionList = document.getElementById('instructionList');
        const newParagraph = document.createElement('p');
        newParagraph.textContent = newInstruction;
        instructionList.appendChild(newParagraph);

        // Clear the textarea
        instructionsTextarea.value = '';

        // Save data to local storage when an instruction is added
        console.log('Saving data to local storage after adding instruction.');
        saveToLocalStorage();
    }
}

// Function to save form data to local storage
function saveToLocalStorage() {
    console.log('Saving form data to local storage...');
    const fieldsToSave = ['recipeName', 'recipeImage', 'cookieType', 'servingSize', 'ingredients', 'instructions'];

    // Create an object to store the form data
    const formData = {};

    // Retrieve values and store in formData object
    fieldsToSave.forEach(field => {
        const element = document.getElementById(field);
        formData[field] = element.value.trim();
    });

    // Convert the formData object to a JSON string and store in local storage
    localStorage.setItem('formData', JSON.stringify(formData));
}

// Function to load form data from local storage
function loadFromLocalStorage() {
    console.log('Loading form data from local storage...');
    // Retrieve the JSON string from local storage
    const savedData = localStorage.getItem('formData');

    if (savedData) {
        // Parse the JSON string back into an object
        const formData = JSON.parse(savedData);

        // Set values in the form
        for (const field in formData) {
            if (formData.hasOwnProperty(field)) {
                document.getElementById(field).value = formData[field];
            }
        }
    }
}

// Function to clear the form fields and lists
function clearForm() {
    console.log('Clearing form fields and lists...');
    const fieldsToClear = ['recipeName', 'recipeImage', 'cookieType', 'servingSize', 'ingredients', 'instructions'];

    // Clear values in the form
    fieldsToClear.forEach(field => {
        document.getElementById(field).value = '';
    });

    // Clear the ingredient and instruction lists
    console.log('Clearing ingredient and instruction lists...');
    const ingredientList = document.getElementById('ingredientList');
    while (ingredientList.firstChild) {
        ingredientList.removeChild(ingredientList.firstChild);
    }

    const instructionList = document.getElementById('instructionList');
    while (instructionList.firstChild) {
        instructionList.removeChild(instructionList.firstChild);
    }

    // Clear local storage
    console.log('Clearing local storage...');
    localStorage.removeItem('formData');

    // Clear the textareas
    console.log('Clearing textareas...');
    document.getElementById('ingredients').value = '';
    document.getElementById('instructions').value = '';
}

// Update the resetForm function to remove the textareas' content only
function resetForm() {
    console.log('Resetting textareas...');
    // Clear the textareas
    document.getElementById('ingredients').value = '';
    document.getElementById('instructions').value = '';
}


// Load data from local storage
window.onload = loadFromLocalStorage;

// Function to submit form and store data in local storage
function validateForm() {
    document.querySelectorAll('.error').forEach(error => error.textContent = '');

    // Save data to local storage
    saveToLocalStorage();

    // Show submission message
    showSubmissionMessage();

    // Clear the form
    resetForm();
}

// ... (your existing JavaScript code) ...
