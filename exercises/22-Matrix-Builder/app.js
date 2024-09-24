// Your code here
function matrixBuilder(num){
    let matrix=[]
    for (let i = 0;i< num;i++){
        let row=[]
        for(let x = 0; x < num;x++){
            row.push(Math.floor(Math.random()*2))
        }
        matrix.push(row)
    }
    return matrix
}


// Do not change anything from this line down
console.log(matrixBuilder(5))
