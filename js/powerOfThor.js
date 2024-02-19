/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

var inputs = readline().split(' ');
const lightX = parseInt(inputs[0]); // the X position of the light of power
const lightY = parseInt(inputs[1]); // the Y position of the light of power
const initialTx = parseInt(inputs[2]); // Thor's starting X position
const initialTy = parseInt(inputs[3]); // Thor's starting Y position
let directionX = '';
let directionY = '';
let X=initialTx;
let Y=initialTy;
// game loop
while (true) {
    const remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.
    // Write an action using console.log()
    // To debug: console.error('direction', direction);
    let directionX = '';
    let directionY = '';

    if (Y > lightY) {
        directionY = 'N';
        Y--;
    }
    if (Y < lightY){
        directionY = 'S';
        Y++;
    };

    if (X < lightX ) {
        directionX = 'E';
        X++
        
    }
   
    if (X > lightX){
        directionX = 'W'
        X--
    };
    // A single line providing the move to be made: N NE E SE S SW W or NW
    console.log(directionY + directionX);
}
