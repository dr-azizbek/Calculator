// function changeColor(element){
//     var currentColor = element.sty
//     if(currentColor == "red"){
//         element.style.backgroundCol
//     }else{
//         element.style.backgroundCol
//     }
// }






let number1 = +prompt('Birinchi sonni kiriting');
let complete = prompt('Ammalni kiriting');

// if (complete != '*' || complete != '/' || complete != '+' || complete != '-') {
//     complete = prompt('Ammalni qayta kiriting');
// }
let number2 = +prompt('Ikkinchi sonni kiriting');

let result;

if (complete == '*') {
    result = number1 * number2
};
if (complete == '/') {
    result = number1 / number2
}
if (complete == '+') {
    result = number1 + number2
}
if (complete == '-') {
    result = number1 - number2
}


alert(result);


// const cars = ("audi","tesla","bmw")
// console.log(cars)
// cars.push("toyoto")
// console.log(cars)