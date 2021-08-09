//-------------------------------------------- problem numbers 1

function seerToMon(seer) {
    let monQuantity = 40;
    let seerToMonQuantity = seer / monQuantity;
    return seerToMonQuantity;
}

let seerQuantity = 120;
let totalMon = seerToMon(seerQuantity);
console.log(totalMon);


//result : 3;





// ------------------------------------------problem numbers 2


function totalSales(shirt, pant, shoe) {



    //fixed price of products
    const shirtPrice = 100;
    const pantPrice = 200;
    const shoePrice = 500;

    //price by Sales
    let totalShirtPrice = shirtPrice * shirt;
    let totalpantPrice = pantPrice * pant;
    let totalshoePrice = shoePrice * shoe;

    //total price
    let totalPrice = totalShirtPrice + totalpantPrice + totalshoePrice;
    return totalPrice;
}

//order number
let productsShirt = 6;
let productsPant = 4;
let productsShoe = 3;


let totalSalesPrice = totalSales(productsShirt, productsPant, productsShoe);
console.log(totalSalesPrice);



//result : 2900;

// --------------------------------problem numbers 3


function deliveryCost(product) {

    // price for product
    const first100Product = 100;
    const second200Product = 80;
    const upto200Product = 50;

    //0-100 product price
    if (product <= 100) {
        let productPrice = product * first100Product;
        return productPrice;
    }

    //100-200 product price
    else if (product <= 200) {
        let first100price = 100 * first100Product;
        let restProduct = product - 100;
        let second200price = restProduct * 80;
        let finalPrice = first100price + second200price;
        return finalPrice;
    }

    //upto 200 product price
    else {
        let first100price = 100 * first100Product;
        let second200price = 100 * 80;
        let restProduct = product - 200;
        let upto200price = restProduct * 50;
        let finalPrice = first100price + second200price + upto200price;
        return finalPrice;
    }
}

let totalDeliveryCost = deliveryCost(230);
console.log(totalDeliveryCost);

//result : 19500;



// -------------------------------------problem numbers 4

function perfectFriend(friends) {
    // my friends name 
    let friend = '';

    //find perfect friend name 
    for (let i = 0; i < friends.length; i++) {
        const element = friends[i];
        if (element.length == 5) {
            friend = element;
            break;
        }
    }
    return friend;

}

let friends = ['shohag', 'habibul', 'antik', 'shimul', 'sabbir', 'khan'];

let perfectFriendName = perfectFriend(friends);

console.log(perfectFriendName);

// result : antik;
