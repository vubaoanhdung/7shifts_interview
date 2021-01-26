// Damon Vu
// damon.vu@usask.ca
// 306-241-5778

// --------------


const trimAndConvert = (stringToConvert, delimiter) => {
    let trimmedStr = stringToConvert.trim(delimiter);
    return parseInt(trimmedStr ? trimmedStr : 0);
}

const Add = (numbers) =>  {
    const arr = numbers.split(",");
    let sum = 0;
    arr.map(num => {
        sum += trimAndConvert(num, "\n");
    })
    return sum;
}


console.log(Add('1,2,3'));
console.log(Add(""))
console.log(Add(','))
console.log("Test cases for 2.")
console.log(Add("1\n,2,3"))
console.log(Add("1,2\n,4"))





