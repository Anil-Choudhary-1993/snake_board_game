let inputDirection = {x:0, y:0};
let lastDirection;
window.addEventListener("keydown", (event) => {
    switch(event.key) {
        case 'ArrowUp':
            if(lastDirection.y !== 0) break;
            inputDirection = {x: 0, y: -1}; 
            break;
        case 'ArrowDown':
            if(lastDirection.y !== 0) break;
            inputDirection = {x: 0, y: 1};
            break;
        case 'ArrowLeft':
            if(lastDirection.x !== 0) break;
            inputDirection = {x: -1, y: 0};
            break;
        case 'ArrowRight':
            if(lastDirection.x !== 0) break;
            inputDirection = {x: 1, y: 0};
            break;
        default:
            break;    
    }
});

export function getDirection() {
    lastDirection = inputDirection;
    return inputDirection;
}