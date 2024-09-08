
// Task 1: Calculate the tip 

let bill = 60; // Example of the bill
let tip;

if(bill>= 50 && bill<=300) {
    tip = (bill) * .15;
}
else{tip = (bill) * .20;
}


// Task 2: Output Details

let total = bill + tip;

console.log(`The bill was $${bill}, the tip was $${tip}, and the total value is $${total}`);


// Task 3: Create a function

function calculateTip(bill) {  
    let tip;
    if(bill>= 50 && bill<=300) {
        tip = (bill) * .15;
    }
    else{tip = (bill) * .20;
    }
    return tip }; 

    bill = 100;
    tip = calculateTip(bill);
    total = bill + tip

    console.log(`The bill was $${bill}, the tip was $${tip}, and the total value is $${total}`);


    // Task 4: Utilize Arrays 
    // Data Set 1 

    let bills = [275,40,430];
    let tips = bills.map(bill => calculateTip(bill));

    console.log("Bills: ", bills);
    console.log("Tips: ", tips);

    let totals = bills.map((bills, index) => bills + tips[index]);

    console.log("Totals: ", totals);
    
    bills.forEach((bill, index) => 
         { let tip = tips[index];
            let total = bill + tip;
            console.log(`The bill was $${bill}, the tip was $${tip}, and the total value is $${total}`)});

     // Task 5: Test Data
     // Data Set 2

    bills = [125,555,44];
    tips = bills.map(bill => calculateTip(bill));

    console.log("Bills: ", bills);
    console.log("Tips: ", tips);

    totals = bills.map((bills, index) => bills + tips[index]);

    console.log("Totals: ", totals);
    
    bills.forEach((bill, index) => 
         { let tip = tips[index];
            let total = bill + tip;
            console.log(`The bill was $${bill}, the tip was $${tip}, and the total value is $${total}`)});

           