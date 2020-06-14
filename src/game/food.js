import { onSnake, expandSnake } from './snake';
import { getRandomPosition } from './utils';
import { EXPANSION_RATE } from './game';

let food = {x: 18, y: 19};

export function update(GAME_BOARD) {
    if(onSnake(food)) {
        expandSnake(EXPANSION_RATE);
        food = getRandomPosition();
    }
}

export function draw(GAME_BOARD) {
    let foodElement = document.createElement("div");
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add("food");
    GAME_BOARD.appendChild(foodElement);
}