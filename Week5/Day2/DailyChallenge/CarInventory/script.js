// Daily challenge: Car Inventory

// Part I
// Create a function getCarHonda(carInventory) that takes a single parameter. 
// carInventory‘s value is an array which is an inventory of cars
// The function should
//     loop through the array of object and return the first car with the name “Honda”.
//     then, return a string in the format This is a {car_make} {car_model} from {car_year}.

function getCarHonda(carInventory){
    let car = carInventory.find((item) => item.car_make === 'Honda')
    return `This is a ${car.car_make} ${car.car_model} from ${car.car_year}`;
    // for (car of carInventory){
    //     if (car.car_make === "Honda"){
    //         return `This is a ${car.car_make} ${car.car_model} from ${car.car_year}`;
    //     }
    // }
}

const inventory = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];

console.log(getCarHonda(inventory));


// Part II
// Create a function sortCarInventoryByYear(carInventory) that takes a single parameter. 
// carInventory‘s value is an array which is an inventory of cars 
// the function should return an inventory that is sorted by car_year, ascending.

let sortCarInventoryByYear = (carInventory) => {
    carInventory.sort((older, younger) => {
        return older.car_year - younger.car_year
    })
    return carInventory
}
console.log(sortCarInventoryByYear(inventory));