// let a
// a = prompt("введите значение")
// alert(`Привет ${a}`)
// consolelog (typeof a)

let mainText = document.querySelector('h1')
let btn = document.querySelector('button')
mainText.style.color = "green"
function changeColor() {
    mainText.style.color = "red"
}


// let a
// a = prompt("введите трехзначение a")
// alert(a % 10)
// let a2 = Math.trunc (a / 10)
// alert( a2 % 10)


// let a
// a = prompt("введите трехзначение a")
// let a1 = Math.trunc (a % 10)
// let a2 = Math.trunc ((a / 10) % 10)
// let a3 = Math.trunc (a / 100)
// alert ( a2 + a1 + a3 )
// alert ( a1 * a2 * a3)


// let a
// a = prompt("введите трехзначение a")
// let a1 = Math.trunc (a % 10)
// let a2 = Math.trunc ((a / 10) % 10)
// let a3 = Math.trunc (a / 100)
// alert ( String(a1) + String(a2) + String(a3))


// let a
// a = prompt("введите a")
// let b
// b = prompt("введите b")
// let c
// c = prompt("введите c")
// if ((a<b)&&(b<c)){
//     alert ("yes")
// }
// else {
//     alert ("no")
// }

// let a
// a = prompt("введите a")
// let b
// b = prompt("введите b")
// if ((a%2==0)&&(b%2==0)){
//     alert("True")
// }
// else {
//     alert("False")
// }


// let a
// a = prompt("введите a")
// let b
// b = prompt("введите b")
// if ((a % 2 != 0)&&(b % 2 != 0)){
//     alert("True")
// }
// else {
//     alert("False")
// }


let a
a = prompt("введите a")
let b
b = prompt("введите b")
let k = 0
if ((a % 2 != 0)&&(b % 2 != 1)) {
    k= 1
}
else{
    if ((b % 2 != 0)&&(a % 2 != 1)){
    k= 1
    }
}
if (k == 1) {
    alert("True")
}
else {
    alert("False")
}