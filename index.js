const arr =[11, '22', '23', '24', 'price: 25', '26', '27', 44, 55]
let sum = 0
for (var i = 0; i < arr.length; i++){
    const currentNumber = arr[i]
    const converted = parseInt(currentNumber)
    if(!isNaN(converted)){
        sum =  sum +converted 
    }
}

console.log(sum)