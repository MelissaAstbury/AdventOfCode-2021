const {depths} = require("./Depths");

const depthsArr = depths.split(/\n/);

let index = 0
const result = [];
const totalDepths = [];

depthsArr.forEach(num => {
    result.push(depthsArr.slice(index, index + 3))
    index = index + 1
    });
    
    result.forEach(collection => {
        if (collection.length === 3){
            let sum = 0;
            collection.forEach((num) => {
                sum += +num;
            })
            totalDepths.push(sum);
        }
    });

    let lastNum;
    let count = 0;
    
    totalDepths.forEach((num) => {
        if (!lastNum){ 
            lastNum = num;
        } else {
            if (lastNum < num){
                count++
            }
            lastNum = num;
        }
    });
    console.log(count);


