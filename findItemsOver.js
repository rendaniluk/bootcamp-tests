//importing assert function in JS
//const assert = require('assert');

//declaring function findItemsOver
function findItemsOver(itemPrice,threshold) {
  //for loop to print out the list over 20
  //declaring an empty list
  var newList = [];

  for(var i in itemPrice){
      var listItem = itemPrice[i];
  //conditional to check if price is over threshold
      if(listItem.price > threshold){
        newList.push(listItem)
            }
        }
        console.log(newList);
  return newList;
  }
//declaring object with two attributes
var itemList = [
{name : 'apples', price : 10},
{name : 'pears', price : 37},
{name : 'bananas', price : 27},
{name : 'apples', price : 3},
];
//calling and storing function call to variable my_ls
var my_ls = findItemsOver(itemList,25);
assert.deepEqual(my_ls,[ { name: 'pears', price: 37 }, { name: 'bananas', price: 27 } ])
