import {
    createHeaderElement
} from "./Header.js"

const updatingTacoHtml = function (tacoJson) {
    const container = document.querySelector('.container');
    const header = createHeaderElement(tacoJson);
    container.prepend(header);

    const tacoBaseLayerTitle = document.querySelector('.taco-base-layer__title');
    tacoBaseLayerTitle.innerText = tacoJson.base_layer.name;
    const tacoBaseLayerRecipe = document.querySelector('.taco-base-layer__recipe');
    tacoBaseLayerRecipe.innerText = tacoJson.base_layer.recipe;

    const tacoMixinTitle = document.querySelector('.taco-mixin__title');
    tacoMixinTitle.innerText = tacoJson.mixin.name;
    const tacoMixinRecipe = document.querySelector('.taco-mixin__recipe');
    tacoMixinRecipe.innerText = tacoJson.mixin.recipe;

    const tacoCondimentTitle = document.querySelector('.taco-condiment__title');
    tacoCondimentTitle.innerText = tacoJson.condiment.name;
    const tacoCondimentRecipe = document.querySelector('.taco-condiment__recipe');
    tacoCondimentRecipe.innerText = tacoJson.condiment.recipe;

    const tacoSeasoningTitle = document.querySelector('.taco-seasoning__title');
    tacoSeasoningTitle.innerText = tacoJson.seasoning.name;
    const tacoSeasoningRecipe = document.querySelector('.taco-seasoning__recipe');
    tacoSeasoningRecipe.innerText = tacoJson.seasoning.recipe;

    const tacoShellTitle = document.querySelector('.taco-shell__title');
    tacoShellTitle.innerText = tacoJson.shell.name;
    const tacoShellRecipe = document.querySelector('.taco-shell__recipe');
    tacoShellRecipe.innerText = tacoJson.shell.recipe;
}

export {
    updatingTacoHtml
}