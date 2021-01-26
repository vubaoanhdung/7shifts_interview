// Damon Vu
// damon.vu@usask.ca
// 306-241-5778

// --------------


const Add = (numbers) =>  {
    const arr = numbers.split(",");
    let sum = 0;
    arr.map(num => {
        sum += parseInt(num ? num : 0)
    })
    return sum;
}


console.log(Add('1,2,3'));
console.log(Add(""))
console.log(Add(','))





