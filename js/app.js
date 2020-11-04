import {
    sampleTaco
} from "./sampleTaco.js"

import {
    createHeaderElement
} from "./Header.js"


const container = document.querySelector('.container');

const header = createHeaderElement(sampleTaco);

container.prepend(header);




const tacoBaseLayerTitle = document.querySelector('.taco-base-layer__title');
tacoBaseLayerTitle.innerText = sampleTaco.base_layer.name;
const tacoBaseLayerRecipe = document.querySelector('.taco-base-layer__recipe');
tacoBaseLayerRecipe.innerText = sampleTaco.base_layer.recipe;

const tacoMixinTitle = document.querySelector('.taco-mixin__title');
tacoMixinTitle.innerText = sampleTaco.mixin.name;
const tacoMixinRecipe = document.querySelector('.taco-mixin__recipe');
tacoMixinRecipe.innerText = sampleTaco.mixin.recipe;

const tacoCondimentTitle = document.querySelector('.taco-condiment__title');
tacoCondimentTitle.innerText = sampleTaco.condiment.name;
const tacoCondimentRecipe = document.querySelector('.taco-condiment__recipe');
tacoCondimentRecipe.innerText = sampleTaco.condiment.recipe;

const tacoSeasoningTitle = document.querySelector('.taco-seasoning__title');
tacoSeasoningTitle.innerText = sampleTaco.seasoning.name;
const tacoSeasoningRecipe = document.querySelector('.taco-seasoning__recipe');
tacoSeasoningRecipe.innerText = sampleTaco.seasoning.recipe;

const tacoShellTitle = document.querySelector('.taco-shell__title');
tacoShellTitle.innerText = sampleTaco.shell.name;
const tacoShellRecipe = document.querySelector('.taco-shell__recipe');
tacoShellRecipe.innerText = sampleTaco.shell.recipe;