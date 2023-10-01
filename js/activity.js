const myVar = "Say my name ";
function FEW() { 
    const myVar = "Hello world"; // local const
    return myVar;
}
console.log(FEW());   
let sum = 0;
function grow() { 
    sum = sum + 4;
    return sum;
}
function addThree() {
    sum = sum + 3;
    return sum;
  }
console.log(grow());
console.log(addThree());
var processed = 2;
function sd(num) { 
    return (num + 3) + 1;
}
console.log(processed = sd(7));
//

