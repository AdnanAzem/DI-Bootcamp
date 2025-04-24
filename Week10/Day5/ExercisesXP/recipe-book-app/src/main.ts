import { RecipeCollection } from './model/RecipeCollection';
import { RecipeTemplate } from './templates/RecipeTemplate';
import { RecipeItem } from './model/RecipeItem';

document.addEventListener('DOMContentLoaded', () => {
    const recipeCollection = new RecipeCollection();
    const recipeTemplate = new RecipeTemplate(recipeCollection);

    // Initial render
    recipeTemplate.renderRecipes();

    // Form submission handler
    const form = document.getElementById('recipeEntryForm') as HTMLFormElement;
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const titleInput = document.getElementById('recipeTitle') as HTMLInputElement;
        const ingredientsInput = document.getElementById('ingredients') as HTMLTextAreaElement;
        const instructionsInput = document.getElementById('instructions') as HTMLTextAreaElement;

        const ingredients = ingredientsInput.value
            .split('\n')
            .map(line => line.trim())
            .filter(line => line.length > 0);

        const newRecipe = new RecipeItem(
            titleInput.value,
            ingredients,
            instructionsInput.value
        );

        recipeCollection.addRecipe(newRecipe);
        recipeTemplate.renderRecipes();

        // Reset form
        form.reset();
    });

    // Clear all recipes button
    const clearButton = document.getElementById('clearRecipesButton');
    if (clearButton) {
        clearButton.addEventListener('click', () => {
            if (confirm('Are you sure you want to delete all recipes?')) {
                recipeCollection.clearRecipes();
                recipeTemplate.renderRecipes();
            }
        });
    }
});