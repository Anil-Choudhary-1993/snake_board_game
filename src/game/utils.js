import { onSnake } from './snake';
import { MAXIMUM_BOARD_SIZE } from './game';

export function getRandomPosition() {
    let position = null;
    while(position === null || onSnake(position)) {
        position = getFoodPosition();
    }
    return position;
}

function getFoodPosition() {
    return {
        x: Math.floor(Math.random() * MAXIMUM_BOARD_SIZE)+1,
        y: Math.floor(Math.random() * MAXIMUM_BOARD_SIZE)+1
    }
}