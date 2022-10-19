export interface IUser {
    password: String;
    nickname: String;
    email: String;
}

export interface IIngredient {
    name: String;
    unit: String;
}

export interface IUsedIngredient {
    amount: Number;
    ingredient: IIngredient;
}

export interface IStep {
    description: String;
    sequence: Number;
    usedIngredients: IUsedIngredient[];
    input?: File;
    url?: String;
    tag?: HTMLImageElement;
}

export interface IRecipe {
    owner: String;
    cuisine: String;
    ingredients: IIngredient[];
    steps: IStep[];
    isBest: Boolean;
    isNew: Boolean;
}