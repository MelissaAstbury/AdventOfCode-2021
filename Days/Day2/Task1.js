const {directions} = require("./Directions");

const directionsArr = directions.split(/\n/);

let depth = 0;
let horizontal = 0;

directionsArr.forEach((direction) => {
    if (direction[0] === "d") {
        depth = depth + +direction.replace(/[^0-9]/g, "")
    } else if (direction[0] === "u") {
        depth = depth - +direction.replace(/[^0-9]/g, "")
    } else if (direction[0] === "f"){
        horizontal = horizontal + +direction.replace(/[^0-9]/g, "")
    }
});
console.log(depth*horizontal);
