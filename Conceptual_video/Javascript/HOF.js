let r = [1,2,3,4]

let area = (r) => {
    return Math.PI * r * r
}


let diamter = (r) => {
    return 2 * r;
}



let calculate = (radius, operation) =>{
    let out = []
    for (let i = 0; i < radius.length; i++){
        out.push(operation(radius[i]))
    }

    return out
}


console.log("area: ", calculate(r, area));
console.log("diameter: ", calculate(r, diamter));
























































































// var r = [1, 2, 3, 4];

// function area(r) {
//   var out = [];
//   for (var i = 0; i < r.length; i++) {
//     out.push(Math.PI * r[i] * r[i]);
//   }
//   return out;
// }

// function diameter(r) {
//   var out = [];
//   for (var i = 0; i < r.length; i++) {
//     out.push(2 * r[i]);
//   }
//   return out;
// }

// console.log(diameter(r));
// console.log(area(r));



// var radius = [1,2,3,4]

// const area = function (radius){
//     return Math.PI * radius * radius
// }

// const circumferance = function (radius){
//     return 2 * Math.PI * radius
// }

// const diameter = function (radius){
//     return 2 * radius
// }

// const calculate = function (radius, operation){
//     var output = [];
//     for (let i = 0; i < radius.length; i++){
//         output.push(operation(radius[i]))
//     }
//     return output
// }

// console.log(calculate(radius, area));
// console.log(calculate(radius, circumferance))
// console.log(calculate(radius, diameter))



