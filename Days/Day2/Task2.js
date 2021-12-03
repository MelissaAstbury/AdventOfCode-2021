// forward = horizontal
// down = adds to aim
// if aim is equal to a number then forward also impacts depth (forward*aim)=depth
// up = decreases aim
// 3787210

const {directions} = require("./Directions");

const directionsArr = directions.split(/\n/);

let depth = 0;
let horizontal = 0;
let aim = 0;

directionsArr.forEach((direction) => {
    if (direction[0] === "d") {
        aim = aim + +direction.replace(/[^0-9]/g, "")
    } else if (direction[0] === "u") {
        aim = aim - +direction.replace(/[^0-9]/g, "")
    } else if (direction[0] === "f"){
        horizontal = horizontal + +direction.replace(/[^0-9]/g, "")
        if (aim > 0) {
            depth = depth + aim * +direction.replace(/[^0-9]/g, "")
        };
    }
});
console.log(depth*horizontal);