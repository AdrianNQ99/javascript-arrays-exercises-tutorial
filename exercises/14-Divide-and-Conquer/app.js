let listOfNumbers = [4, 80, 85, 59, 37, 25, 5, 64, 66, 81, 20, 64, 41, 22, 76, 76, 55, 96, 2, 68];

// Your code here
function mergeTwoList(array) {
    let arrayOdd = [];
    let arrayEven = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            arrayEven.push(array[i]);
        } else {
            arrayOdd.push(array[i]);
        }
    }
    return arrayOdd.concat(arrayEven);
}
console.log(mergeTwoList(listOfNumbers))