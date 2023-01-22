export interface IUser {
    password: string;
    nickname: string;
    email: string;
}

export interface IIngredient {
    name: string;
    unit: string;
}

export interface IUsedIngredient {
    amount: number;
    ingredient: IIngredient;
}

export interface IStep {
    description?: string;
    sequence: number;
    usedIngredients?: IUsedIngredient[];
    url?: string;
}

export interface IRecipe {
    owner: string;
    cuisine: string;
    ingredients: IIngredient[];
    steps: IStep[];
    isBest: Boolean;
    isNew: Boolean;
}
