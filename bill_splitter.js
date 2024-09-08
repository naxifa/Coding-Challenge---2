
// Task 1: Calculate the tip 

let bill=x; // Example of the bill
let x=60;
let tip;

if(x>= 50 && x<=300) {
    tip = x * .15;
}
else{tip = x * .20;
}


// Task 2: Output Details

const total = bill + tip;

console.log(`The bill was $${bill}, the tip was $${tip}, and the total value is $${total}`);
