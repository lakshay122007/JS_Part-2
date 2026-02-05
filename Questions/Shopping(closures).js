// Q) An e-commerce website needs a shopping cart.

// Create a function createCart() that returns an object containing three methods to manage a shopping cart:
// Add items: addItem(itemName) → adds an item to the cart
// Remove items: removeItem(itemName) → removes one occurrence of the item
// Get total items: getTotalItems() → returns total number of items in the cart

// Rules:
// Cart data must be private is stored in an array. 
// You must use closures
// Do not use global variables
 



function createCart() {
    let arr = []

    function addItem(itemName) {
        return arr.push(itemName)
    }
    function removeItem(itemName) {
        return arr.pop(itemName)
    }
    function getTotalItems() {
        return arr.length
    }

    return {
        addItem,
        removeItem,
        getTotalItems
    }

}