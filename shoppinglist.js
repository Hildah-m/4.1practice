const shoppingList = (groceries) => {
    let formattedString = "";
    groceries.forEach((item) =>{
        formattedString +=`${item.item}: ${item.quantity}\n`;
    })
    return formattedString;
};
const groceries =[
    { item: "Bananas" , quantity: 6},
    { item: "Apples" , quantity: 5},
    { item: "Milk" , quantity: 2},
];

console.log(shoppingList(groceries));