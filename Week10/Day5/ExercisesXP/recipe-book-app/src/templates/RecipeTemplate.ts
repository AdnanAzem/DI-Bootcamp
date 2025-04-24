import { RecipeItem } from "../model/RecipeItem";
import { RecipeCollection } from "../model/RecipeCollection";

export class RecipeTemplate {
    private recipeCollection: RecipeCollection;

    constructor(recipeCollection: RecipeCollection) {
        this.recipeCollection = recipeCollection;
    }

    renderRecipes(): void {
        const recipeContainer = document.getElementById('recipeContainer');
        if (!recipeContainer) return;

        recipeContainer.innerHTML = '';
        const recipes = this.recipeCollection.getRecipes();

        recipes.forEach(recipe => {
            const recipeCard = this.createRecipeCard(recipe);
            recipeContainer.appendChild(recipeCard);
        });
    }

    private createRecipeCard(recipe: RecipeItem): HTMLElement {
        const recipeCard = document.createElement('div');
        recipeCard.className = 'recipe-card';
        recipeCard.dataset.id = recipe.id;

        const title = document.createElement('h3');
        title.textContent = recipe.title;
        recipeCard.appendChild(title);

        const favoriteButton = document.createElement('button');
        favoriteButton.textContent = recipe.isFavorite ? '★' : '☆';
        favoriteButton.className = 'favorite-btn';
        favoriteButton.addEventListener('click', () => {
            this.recipeCollection.toggleFavorite(recipe.id);
            this.renderRecipes();
        });
        recipeCard.appendChild(favoriteButton);

        const ingredientsTitle = document.createElement('h4');
        ingredientsTitle.textContent = 'Ingredients:';
        recipeCard.appendChild(ingredientsTitle);

        const ingredientsList = document.createElement('ul');
        recipe.ingredients.forEach(ingredient => {
            const li = document.createElement('li');
            li.textContent = ingredient;
            ingredientsList.appendChild(li);
        });
        recipeCard.appendChild(ingredientsList);

        const instructionsTitle = document.createElement('h4');
        instructionsTitle.textContent = 'Instructions:';
        recipeCard.appendChild(instructionsTitle);

        const instructions = document.createElement('p');
        instructions.textContent = recipe.instructions;
        recipeCard.appendChild(instructions);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-btn';
        deleteButton.addEventListener('click', () => {
            this.recipeCollection.removeRecipe(recipe.id);
            this.renderRecipes();
        });
        recipeCard.appendChild(deleteButton);

        return recipeCard;
    }
}