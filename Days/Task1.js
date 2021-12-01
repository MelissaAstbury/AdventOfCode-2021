const {depths} = require("./Depths");

const depthsArr = depths.split(/\n/);

let lastNum = 0;
let count = 0;

depthsArr.forEach((num) => {
    if (lastNum < num){
        count++
    }
    lastNum = num;
});
console.log(count);