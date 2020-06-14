import { getDirection } from './input';
import { MAXIMUM_BOARD_SIZE } from './game';

const snakeBody = [{ x: 11, y: 11 }]
let newSegment = 0;

export function update(GAME_BOARD) {
    addSegment();
    const inputDirection = getDirection();
    for (let position = snakeBody.length - 2; position >= 0; position--) {
        snakeBody[position + 1] = { ...snakeBody[position] };
    }
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

export function draw(GAME_BOARD) {
    let snakeElement;
    snakeBody.forEach((element) => {
        snakeElement = document.createElement("div");
        snakeElement.style.gridRowStart = element.y;
        snakeElement.style.gridColumnStart = element.x;
        snakeElement.classList.add("snake");
        GAME_BOARD.appendChild(snakeElement);
    })
}

function getSnakeHead() {
    return snakeBody[0];
}

export function expandSnake(expansion_rate) {
    newSegment += expansion_rate;
}

export function onSnake(position, {ignoreHead = false}  = {}) {
    return snakeBody.some((elementPosition, index) => {
        if(ignoreHead && index === 0) return false;
        return equalPosition(elementPosition, position);
    });
}

function equalPosition(pos1, pos2) {
    if (pos1.x === pos2.x && pos1.y === pos2.y) return true;
    return false;
}

function addSegment() {
    for (let i = 0; i < newSegment; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
    }
    newSegment = 0;
}

export function snakeBiteItself() {
    return onSnake(getSnakeHead(), {ignoreHead: true})
}

export function outsideBoardTouched() {
    const snakeHead = getSnakeHead();
    return (snakeHead.x < 1 || snakeHead.x > MAXIMUM_BOARD_SIZE || snakeHead.y < 1 || snakeHead.y > MAXIMUM_BOARD_SIZE);
} 