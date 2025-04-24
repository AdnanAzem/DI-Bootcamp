import { RecipeItem } from "./RecipeItem";

export class RecipeCollection {
    private recipes: RecipeItem[] = [];
    private readonly storageKey: string = 'recipeBook';

    constructor() {
        this.loadRecipes();
    }

    addRecipe(recipe: RecipeItem): void {
        this.recipes.push(recipe);
        this.saveRecipes();
    }

    removeRecipe(id: string): void {
        this.recipes = this.recipes.filter(recipe => recipe.id !== id);
        this.saveRecipes();
    }

    toggleFavorite(id: string): void {
        const recipe = this.recipes.find(recipe => recipe.id === id);
        if (recipe) {
            recipe.isFavorite = !recipe.isFavorite;
            this.saveRecipes();
        }
    }

    getRecipes(): RecipeItem[] {
        return [...this.recipes];
    }

    getFavoriteRecipes(): RecipeItem[] {
        return this.recipes.filter(recipe => recipe.isFavorite);
    }

    clearRecipes(): void {
        this.recipes = [];
        this.saveRecipes();
    }

    private saveRecipes(): void {
        localStorage.setItem(this.storageKey, JSON.stringify(this.recipes));
    }

    private loadRecipes(): void {
        const storedRecipes = localStorage.getItem(this.storageKey);
        if (storedRecipes) {
            const parsedRecipes = JSON.parse(storedRecipes);
            this.recipes = parsedRecipes.map((recipe: any) => 
                new RecipeItem(
                    recipe.title,
                    recipe.ingredients,
                    recipe.instructions,
                    recipe.isFavorite,
                    recipe.id
                )
            );
        }
    }
}