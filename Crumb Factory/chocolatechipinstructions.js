
const storedInstructions = JSON.parse(localStorage.getItem('cookieInstructions'));

const instructions = {
    half: {
        summary: "Add half the amount of ingredients. Bake for 10 minutes.",
        detailed: [
            "Preheat the oven to 350°F (180°C).",
            "Combine half the amount of flour, sugar, and chocolate chips.",
            "Bake for 10 minutes or until golden brown."
        ],
        ingredients: [
            "1/2 cup flour",
            "1/2 cup sugar",
            "1/2 cup chocolate chips"
        ]
    },
    normal: {
        summary: "Follow the standard recipe instructions. Bake for 12 minutes.",
        detailed: [
            "Preheat the oven to 350°F (180°C).",
            "Combine the specified amount of flour, sugar, and chocolate chips.",
            "Bake for 12 minutes or until golden brown."
        ],
        ingredients: [
            "1 cup flour",
            "1 cup sugar",
            "1 cup chocolate chips"
        ]
    },
    double: {
        summary: "Double the amount of ingredients. Bake for 15 minutes.",
        detailed: [
            "Preheat the oven to 350°F (180°C).",
            "Double the amount of flour, sugar, and chocolate chips.",
            "Bake for 15 minutes or until golden brown."
        ],
        ingredients: [
            "2 cups flour",
            "2 cups sugar",
            "2 cups chocolate chips"
        ]
    },
    sugarCookieHalf: {
        summary: "Add half the amount of ingredients. Bake for 10-12 minutes.",
        detailed: [
            "Preheat the oven to 375°F (190°C).",
            "Combine half the amount of flour, sugar, and butter.",
            "Add any additional ingredients for flavor.",
            "Bake for 10-12 minutes or until the edges are lightly golden."
        ],
        ingredients: [
            "1 cup all-purpose flour",
            "1/2 cup sugar",
            "1/2 cup butter",
            "Additional flavorings (e.g., vanilla extract)"
        ]
    },
    sugarCookieNormal: {
        summary: "Follow the standard recipe instructions. Bake for 12 minutes.",
        detailed: [
            "Preheat the oven to 375°F (190°C).",
            "Combine the specified amount of flour, sugar, and butter.",
            "Add any additional ingredients for flavor.",
            "Bake for 10-12 minutes or until the edges are lightly golden."
        ],
        ingredients: [
            "2 cups all-purpose flour",
            "1 cup sugar",
            "1 cup butter",
            "Additional flavorings (e.g., vanilla extract)"
        ]
    },
    sugarCookieDouble: {
        summary: "Double the amount of ingredients. Bake for 15 minutes.",
        detailed: [
            "Preheat the oven to 375°F (190°C).",
            "Double the amount of flour, sugar, and butter.",
            "Add any additional ingredients for flavor.",
            "Bake for 15 minutes or until the edges are lightly golden."
        ],
        ingredients: [
            "4 cups all-purpose flour",
            "2 cups sugar",
            "2 cups butter",
            "Additional flavorings (e.g., vanilla extract)"
        ]
    },
    oatmealCookieHalf: {
        summary: "Add half the amount of ingredients. Bake for 10 minutes.",
        detailed: [
            "Preheat the oven to 350°F (175°C) and line a baking sheet with parchment paper.",
            "In a medium-sized bowl, mix together 1/2 cup rolled oats, 3/8 cup all-purpose flour, 1/4 teaspoon baking soda, 1/4 teaspoon cinnamon, and 1/8 teaspoon salt.",
            "In a separate large bowl, cream together 1/4 cup softened unsalted butter, 1/4 cup brown sugar, and 1/8 cup granulated sugar until smooth.",
            "Beat in 1/2 egg and 1/2 teaspoon vanilla extract until well combined.",
            "Gradually add the dry ingredients to the wet ingredients, mixing until just combined. If desired, fold in 1/8 cup raisins or chocolate chips.",
            "Drop rounded tablespoons of dough onto the prepared baking sheet. Bake for 10 minutes or until golden brown.",
            "Allow the cookies to cool on the baking sheet for a few minutes before transferring them to a wire rack to cool completely."
        ],
        ingredients: [
            "1/2 cup rolled oats",
            "3/8 cup all-purpose flour",
            "1/4 teaspoon baking soda",
            "1/4 teaspoon cinnamon",
            "1/8 teaspoon salt",
            "1/4 cup unsalted butter, softened",
            "1/4 cup brown sugar, packed",
            "1/8 cup granulated sugar",
            "1/2 egg",
            "1/2 teaspoon vanilla extract",
            "1/8 cup raisins or chocolate chips (optional)"
        ]
    },
    oatmealCookieNormal: {
        summary: "Follow the standard recipe instructions. Bake for 12 minutes.",
        detailed: [
            "Preheat the oven to 350°F (175°C) and line a baking sheet with parchment paper.",
            "In a medium-sized bowl, mix together 1 cup rolled oats, 3/4 cup all-purpose flour, 1/2 teaspoon baking soda, 1/2 teaspoon cinnamon, and 1/4 teaspoon salt.",
            "In a separate large bowl, cream together 1/2 cup softened unsalted butter, 1/2 cup brown sugar, and 1/4 cup granulated sugar until smooth.",
            "Beat in 1 egg and 1 teaspoon vanilla extract until well combined.",
            "Gradually add the dry ingredients to the wet ingredients, mixing until just combined. If desired, fold in 1/2 cup raisins or chocolate chips.",
            "Drop rounded tablespoons of dough onto the prepared baking sheet. Bake for 12 minutes or until golden brown.",
            "Allow the cookies to cool on the baking sheet for a few minutes before transferring them to a wire rack to cool completely."
        ],
        ingredients: [
            "1 cup rolled oats",
            "3/4 cup all-purpose flour",
            "1/2 teaspoon baking soda",
            "1/2 teaspoon cinnamon",
            "1/4 teaspoon salt",
            "1/2 cup unsalted butter, softened",
            "1/2 cup brown sugar, packed",
            "1/4 cup granulated sugar",
            "1 large egg",
            "1 teaspoon vanilla extract",
            "1/2 cup raisins or chocolate chips (optional)"
        ]
    },
    oatmealCookieDouble: {
        summary: "Double the amount of ingredients. Bake for 15 minutes.",
        detailed: [
            "Preheat the oven to 350°F (175°C) and line a baking sheet with parchment paper.",
            "In a medium-sized bowl, mix together 2 cup rolled oats, 1 1/2 cup all-purpose flour, 1 teaspoon baking soda, 1 teaspoon cinnamon, and 1/2 teaspoon salt.",
            "In a separate large bowl, cream together 1 cup softened unsalted butter, 1 cup brown sugar, and 1/2 cup granulated sugar until smooth.",
            "Beat in 2 eggs and 2 teaspoon vanilla extract until well combined.",
            "Gradually add the dry ingredients to the wet ingredients, mixing until just combined. If desired, fold in 1 cup raisins or chocolate chips.",
            "Drop rounded tablespoons of dough onto the prepared baking sheet. Bake for 15 minutes or until golden brown.",
            "Allow the cookies to cool on the baking sheet for a few minutes before transferring them to a wire rack to cool completely."
        ],
        ingredients: [
            "2 cups rolled oats",
            "1 1/2 cups all-purpose flour",
            "1 teaspoon baking soda",
            "1 teaspoon cinnamon",
            "1/2 teaspoon salt",
            "1 cup unsalted butter, softened",
            "1 cup brown sugar, packed",
            "1/2 cup granulated sugar",
            "2 large eggs",
            "2 teaspoons vanilla extract",
            "1 cup raisins or chocolate chips (optional)"
        ]
    }
};

document.querySelector('.halfbutton').addEventListener('click', () => {
    updateInstructionsAndIngredients('oatmealCookieHalf');
});

document.querySelector('.normalbutton').addEventListener('click', () => {
    updateInstructionsAndIngredients('oatmealCookieNormal');
});

document.querySelector('.doublebutton').addEventListener('click', () => {
    updateInstructionsAndIngredients('oatmealCookieDouble');
});

document.querySelector('.instruction').addEventListener('click', () => {
    displayInstructions('oatmealCookieNormal'); // Default to 'oatmealCookieNormal' for initial display
});

document.querySelector('.ingredients').addEventListener('click', () => {
    displayIngredients('oatmealCookieNormal'); // Default to 'oatmealCookieNormal' for initial display
});

function updateInstructionsAndIngredients(cookieType) {
    displayInstructions(cookieType);
    displayIngredients(cookieType);
}

function displayInstructions(cookieType) {
    const instructionContainer = document.querySelector('.instruction');
    const instruction = instructions[cookieType].detailed;

    // Clear previous instructions
    instructionContainer.innerHTML = '';

    // Display new instructions
    instruction.forEach((step, index) => {
        const stepNumber = index + 1;
        const stepElement = document.createElement('p');
        stepElement.textContent = `${stepNumber}. ${step}`;
        instructionContainer.appendChild(stepElement);
    });
}

function displayIngredients(cookieType) {
    const ingredientsContainer = document.querySelector('.ingredients');
    const ingredients = instructions[cookieType].ingredients;

    // Clear previous ingredients
    ingredientsContainer.innerHTML = '';

    // Display new ingredients
    ingredients.forEach((ingredient) => {
        const ingredientElement = document.createElement('p');
        ingredientElement.textContent = ingredient;
        ingredientsContainer.appendChild(ingredientElement);
    });
}
