const myNums = [1,2,3,4,5];
// const myTotal = myNums.reduce(function(acc,currval){
//     console.log(`acc :${acc} and currentval : ${currval}`)
//     return acc+currval;
// }, 0)

// const myTotal = myNums.reduce((acc,currval)=>(acc+currval), 0)
// console.log(myTotal)

const shoppingCart = [
    {
        itemName : "js course",
        Price : 1999
    },
    {
        itemName : "DSA course",
        Price : 3999
    },
    {
        itemName : "AI-ML course",
        Price : 4999
    },
    {
        itemName : "DS course",
        Price : 6999
    }
]
const Bill = shoppingCart.reduce((acc,item)=>(item.Price+acc),0);
console.log(Bill);