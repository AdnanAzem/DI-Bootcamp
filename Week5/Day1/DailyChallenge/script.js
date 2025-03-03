let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const displayGroceries = (obj) => {
    const fruits = obj.fruits.forEach(fruit => {console.log(fruit);});}

displayGroceries(groceries);

const cloneGroceries = () => {
    let user = client;
    client = "Betty";
    console.log(user, client);
    // we don't see the modification in the user variable beacuse we pass by value not by reference.

    let shopping = groceries;
    groceries.totalPrice = "35$";
    console.log('groceries', groceries);
    console.log('shopping', shopping);
    // yea we can see the modification in shopping totalPrice variable beacuse we pass by reference not by value.

    groceries.paid = false;
    console.log('groceries', groceries);
    console.log('shopping', shopping);
    // yea we can see the modification in shopping paid variable beacuse we pass by reference not by value. 

}

cloneGroceries();
