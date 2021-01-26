// Damon Vu
// damon.vu@usask.ca
// 306-241-5778

// --------------

class Calculator {
    constructor(numbers) {
        this.numbers = numbers;
        this.newLine = '\n';
        this.delimiterIndicator = '//';
        this.defaultDelimiter = ',';
        this.delimiterIndex = 2;

    }

    add() {
        let sum = 0;
        let arr = this.getNumbersArray();
        arr.map(num => {
            sum += this.convertToInteger(num)
        })
        return sum;
    }

    getDelimiter() {
        if (this.numbers.indexOf(this.delimiterIndicator) != -1) {
            return this.numbers[this.delimiterIndex];
        }
        return this.defaultDelimiter;
    }

    getNumbersArray() {
        let delimeter = this.getDelimiter()
        let numbersArray = this.numbers.replace(this.newLine, delimeter).split(delimeter)
        return numbersArray 
    }

    convertToInteger(stringNum) {
        if (stringNum === '//' || !stringNum) {
            return 0
        }
        return parseInt(stringNum)
    }

}

// Tests for 1.
let t1 = new Calculator('1,2,5')
if (t1.add() !== 8) {
    console.log("Error, please check again! The result should be 8")
}
let t2 = new Calculator('');
if (t2.add() !== 0) {
    console.log("Error, please check again! The result should be 0")
}
let t3 = new Calculator(',')
if (t3.add() !== 0) {
    console.log("Error, please check again! The result should be 0")
}
let t4 = new Calculator('1')
if (t4.add() !== 1) {
    console.log("Error, please check again! The result should be 1")
}












