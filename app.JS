const menu = {
  _meal: ' ',
  _price: 0,


// set should be in the function body and your comma afre the first set. This is still in the object's function body and each key value pair is separed by a comma

//this makes sures that whatever value assigned should be a string, hence using the typeof property
  set meal (mealToCheck){
  if (typeof mealToCheck === 'string'){
     return menu._meal = mealToCheck 
  }
},

//this makes sures that whatever value assigned should be a number, hence using the typeof property
 set price (priceToCheck){
  if (typeof priceToCheck === 'number'){
    return menu._price = priceToCheck
  }
},

get todaysSpecial(){
  if (this._meal && this._price){
    return `Today's Special is ${this._meal} for $${this._price}`
  } else{
    'meal or Price was not set correctly'
  }
}
};

// The values were not assigned to the properties cause they didn't pass the set test. i.e meal is a string and price is a number. But here meal was a number and price was a string. So it wasn't assigned, but instead the original values were retained
// menu.meal = 90
// menu.price = 'eggs'
// console.log(menu)
//when i tried logging the todaysSpecial here, under here, it printed out undefined, cause the meal and price assigned were not of the right data type.



//using the right data type, i.e string for meal and number for price, the new values are assigned to the property.
menu.meal = 'Rice'
menu.price = 98
console.log(menu.todaysSpecial)

// console.log(menu)
