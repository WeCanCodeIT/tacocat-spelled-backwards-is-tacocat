import {
    sampleTaco
} from "./sampleTaco.js"

import {
    createHeaderElement
} from "./Header.js"

import {
    updatingTacoHtml
} from "./updateTacoHtml.js"


fetch('http://taco-randomizer.herokuapp.com/random/')
    .then(response => response.json())
    .then(tacoJson => updatingTacoHtml(tacoJson))