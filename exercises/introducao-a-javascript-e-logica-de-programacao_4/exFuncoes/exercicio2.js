let numbers = [0, 10, 2, 35, 54, 15, 17, 36]
function biggerNumber(array){
    let bigNum = 0
    let index = 0
    for(let i in array){
        if(array[i] > bigNum){
            bigNum = array[i];
            index = i
        }
    }
    return index;
}

console.log (biggerNumber(numbers));