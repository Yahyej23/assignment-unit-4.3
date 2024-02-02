console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
let maxItems = 5;

function addItem(item){
    //
    let fullCheck = isFull();
    //prevent addItems form allowing more than maxItems
    if (fullCheck === false) {
       basket.push(item);
       return true;
    }else{
        return false;
    }
}

function listItems(){
    for (let item in basket){
        console.log(basket[item]);
    }
}



//addItem('item0'); //test cases
//addItem('item1');

//listItems();

function empty(){
    for (let i = basket.length - 1; i >= 0; i--){
        basket.pop();
    }
}

//empty();        //test cases

console.log(basket);

//test add item
console.log(`basket is : ${basket}`);
console.log('adding apple(expect true)', addItem('apple'));
console.log( addItem('pear'));
console.log( addItem('banana'));
console.log( addItem('peach'));
console.log( addItem('grape'));
console.log( addItem('grape'));
console.log( addItem('grape'));
console.log( addItem('grape'));
console.log( addItem('grape'));
console.log(`basket is now: ${basket}`);



function isFull(){
    if (basket.length < maxItems){
        return false;
    } else{
        return true;
    }
}

console.log(isFull());
console.log(basket.length);

function removeItem(item){
    
   let index = basket.indexOf(item);

   if (index !== -1){
    basket.splice(index, 1);
    return item;
   }else {
    return null;
   }
}

removeItem('apple');

console.log(basket);









// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
