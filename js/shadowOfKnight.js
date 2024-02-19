/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
const W = parseInt(inputs[0]); // width of the building.
const H = parseInt(inputs[1]); // height of the building.
const N = parseInt(readline()); // maximum number of turns before game over.
var inputs = readline().split(' ');
const X0 = parseInt(inputs[0]);
const Y0 = parseInt(inputs[1]);

let currentX = X0;
let currentY = Y0;

let minX = 0;
let minY = 0;

let maxX = W
let maxY = H


// game loop
while (true) {
    const bombDir = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)
    if (bombDir.length === 2) {
        if (bombDir[0] === 'U') {
            maxY = currentY
            currentY = Math.floor((currentY + minY) / 2);
        } else {
            minY = currentY
            currentY = Math.floor((currentY + maxY) / 2);
        }

        if (bombDir[1] === 'R') {
            minX = currentX
            currentX = Math.floor((currentX + maxX) / 2);
        } else {
            maxX = currentX
            currentX = Math.floor((currentX + minX) / 2);
        }
    } else {
        switch (bombDir) {
            case 'U':
                maxY = currentY
                currentY = Math.floor((currentY + minY) / 2);
                break;
            case 'D':
                minY = currentY
                currentY = Math.floor((currentY + maxY) / 2);
                break;
            case 'R':
                minX = currentX
                currentX = Math.floor((currentX + maxX) / 2);
                break;
            case 'L':
                maxX = currentX
                currentX = Math.floor((currentX + minX) / 2);
                break;
        }
    }

    // the location of the next window Batman should jump to.
    console.log(`${currentX} ${currentY}`);
}
