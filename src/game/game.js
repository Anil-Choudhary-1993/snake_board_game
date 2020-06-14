import { update as updateSnake, draw as drawSnake, outsideBoardTouched, snakeBiteItself } from './snake';
import { update as updateFood, draw as drawFood} from './food';

let lastRenderTime = 0;
let SNAKE_SPEED = 4;
let GAME_BOARD = null;
export const MAXIMUM_BOARD_SIZE = 21;
export let EXPANSION_RATE = 1;
let gameOver = false;

function main(currentTime) {
    if(gameOver) {
        alert("Game Over");
        window.location = "/";
        return;
    }
    window.requestAnimationFrame(main);
    const sinceLastRender = (currentTime - lastRenderTime) / 1000;
    if(sinceLastRender < 1 / SNAKE_SPEED) return;
    lastRenderTime = currentTime;
    console.log("Rendering Board")
    update();
    draw();
}

function draw() {
    GAME_BOARD.innerHTML = '';
    drawSnake(GAME_BOARD);
    drawFood(GAME_BOARD);
}

function update() {
    checkSnakeIsDead();
    updateSnake(GAME_BOARD);
    updateFood(GAME_BOARD);
}

function checkSnakeIsDead() {
    if(snakeBiteItself() || outsideBoardTouched()) {
        gameOver = true;
        return;
    }
    gameOver = false;
}

export function start() {
    GAME_BOARD = document.querySelector("#game-board");
    const option = prompt("Please enter snake spped (Low, Medium, High)");
    if(option && option.toLowerCase() === 'medium') {
        SNAKE_SPEED = 5;
    } else if(option && option.toLowerCase() === 'high') {
        SNAKE_SPEED = 8;
    } else {
        SNAKE_SPEED = 2;
    } 
    EXPANSION_RATE = prompt("Please enter expansion rate for the snake", 1);
    window.requestAnimationFrame(main);
}