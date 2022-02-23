function task1() {    
    alert("task 1")
    a = Number(prompt("введите число а"))
    if (a > 0){
        alert(a + 1)
    }
    else{
        alert(a)
    }
}


function task2() {    
    alert("task 2")
    a = Number(prompt("введите число а"))
    if (a > 0){
        alert(a + 1)
    }
    else{
        alert(a - 2)
    }
}


function task3() {    
    alert("task 3")
    a = Number(prompt("введите число а"))
    if (a > 0){
        alert(a + 1)
    }
    if (a == 0){
        alert(10)
    }
    else{
        alert(a - 2)
    }
}

function task4() {
    alert("task 4")
    a = prompt("введите число а")
    b = prompt("введите число b")
    c = prompt("введите число c")
    if ((a > 0) && (b > 0) && (c > 0)){
        alert("3 числа положительни")
    }
    if ((a < 0) && (b > 0) && (c > 0)){
        alert("2 числа положительни")
    }
    if ((a > 0) && (b < 0) && (c > 0)){
        alert("2 числа положительни")
    }
    if ((a > 0) && (b > 0) && (c < 0)){
        alert("2 числа положительни")
    }
    if ((a < 0) && (b < 0) && (c > 0)){
        alert("1 числo положительное")
    }
    if ((a > 0) && (b < 0) && (c < 0)){
        alert("1 числo положительное")
    }
    if ((a < 0) && (b > 0) && (c < 0)){
        alert("1 числo положительное")
    }
    if ((a < 0) && (b < 0) && (c < 0)){
        alert("нет положительного числа")
    }
}

function task5() {
    alert("task 5")
    a = prompt("введите число а")
    b = prompt("введите число b")
    c = prompt("введите число c")
    if ((a > 0) && (b > 0) && (c > 0)){
        alert("3 числа положительни, нет отрицательных чисел")
    }
    if ((a < 0) && (b > 0) && (c > 0)){
        alert("2 числа положительни, 1 число отрицательное")
    }
    if ((a > 0) && (b < 0) && (c > 0)){
        alert("2 числа положительни, 1 число отрицательное")
    }
    if ((a > 0) && (b > 0) && (c < 0)){
        alert("2 числа положительни, 1 число отрицательное")
    }
    if ((a < 0) && (b < 0) && (c > 0)){
        alert("1 числo положительное, 2 числа отрицательные")
    }
    if ((a > 0) && (b < 0) && (c < 0)){
        alert("1 числo положительное, 2 числа отрицательные")
    }
    if ((a < 0) && (b > 0) && (c < 0)){
        alert("1 числo положительное, 2 числа отрицательные")
    }
    if ((a < 0) && (b < 0) && (c < 0)){
        alert("нет положительного числа, 3 числа отрицательные")
    }
}


function task6() {    
    alert("task 6")
    a = prompt("введите число а")
    b = prompt("введите число b")
    if(a < b){
        alert(b + " большее число")
    }
    else{
        alert(a + " большее число")
    }
}


function task7() {    
    alert("task 7")
    a = prompt("введите число а")
    b = prompt("введите число b")
    if(a < b){
        alert("второе число больше")
    }
    else{
        alert("первое число больше")
    }
}


function task8() {    
    alert("task 8")
    a = prompt("введите число а")
    b = prompt("введите число b")
    if(a < b){
        alert(b + " большее число")
        alert(a + " меньшее число")
    }
    else{
        alert(a + " большее число")
        alert(b + " меньшее число")
    }
}


function task10() {    
    alert("task 10")
    a = Number(prompt("введите число а"))
    b = Number(prompt("введите число b"))
    if ((a > b) || (a < b)){
        alert( "A = " + a+b)
        alert( "B = " + a+b)
    }
    if (a = b){
        alert( "A = 0")
        alert( "B = 0")
    }
}


function task12() {    
    alert("task 12")
    let a 
    a = prompt("введите число а")
    let b 
    b = prompt("введите число b")
    let c 
    c = prompt("введите число c")
    if ((a < b) && (a < c)){ alert("min " + a) }
    if ((b < a) && (b < c)) { alert("min " + b) } 
    if ((c < a) && (c < b)) {alert("min " + c) }
    else{ alert("false") }
}

function task13() { 
alert("task 13")
a = prompt("введите число а")
b = prompt("введите число b")
c = prompt("введите число c")
if (((a < b) && (a > c)) || ((a > b) && (a < c))){
    alert("ser a=" + a)
}
if (((b < a) && (b > c)) || ((b > a) && (b < c))){
    alert("ser b=" + b)
}
if (((c < b) && (a < c)) || ((c > b) && (a > c))){
    alert("ser c=" + c)
}
else{
}
}

function task14() {
alert("task 14")
a = prompt("введите число а")
b = prompt("введите число b")
c = prompt("введите число c")
if ((a > b) && (a > c)) {
    alert("max a=" + a)
}
if ((b > a) && (b > c)){
    alert("max b=" + b)
}
if ((c > b) && (a < c)){
    alert("max c=" + c)
}
if ((a < b) && (a < c)) {
    alert("min a=" + a)
}
if ((b < a) && (b < c)){
    alert("min b=" + b)
}
if ((c < b) && (a > c)){
    alert("min c=" + c)
}
else{
}
}


function task15() {
alert("task 15")
a = Number(prompt("введите число а"))
b = Number(prompt("введите число b"))
c = Number(prompt("введите число c"))
if ((a > b) && (c > b)){
    alert(a + c)
}
if ((a > b) && (b > c)){
    alert(a + b)
}
if ((a < b) && (c > a)){
    alert(b + c)
}
}


function task16() {
alert("task 16")
a = Number(prompt("введите число а"))
b = Number(prompt("введите число b"))
c = Number(prompt("введите число c"))
if ((a < b) && (b < c)){
    alert(a*2)
    alert(b*2)
    alert(c*2)
}
if ((a > b) && (a < c)){
    alert( b + " " + a +" " + c)
}// 2 1 3
if ((b > c) && (a < c)){
    alert( a + " " + c +" " + b)
}// 1 3 2
if ((a > c) && (a > c) && (b > c)){
    alert( c + " " + b +" " + a)
}// 3 2 1
if ((a > c) && (a > c) && (b < c)){
   alert( b + " " + c +" " + a)
}// 3 1 2
}


function task18() {
    alert("task 18")
    alert("введите три числа, два из которых будут равные")
    a = (prompt("введите число а"))
    b = (prompt("введите число b"))
    c = (prompt("введите число c"))
    if((a==b) &&(b==c)) {
        alert("все равны")
    }else{if ((a!=b) &&(a!=c)&&(b!=c)){
        alert("нет совпопадаюших пар")
        } else{
            if ( a == b ){
                alert("3")
            }       
            if ( a == c ){
                alert("2")
            }
            if ( c == b ){
                alert("1")
            }
            }
        }
}


function task19() {
    alert("task 19")
    alert("введите четири числа, три из которых будут равные")
    a = (prompt("введите число а"))
    b = (prompt("введите число b"))
    c = (prompt("введите число c"))
    let h
    h = (prompt("введите число h"))
    if ( (a == b) && (a == c) ){
        alert("4")
    }
    if ( (a == b) && (a == h) ){
        alert("3")
    }
    if ( (a == h) && (a == c) ){
        alert("2")
    }
    if ( (b == h) && (b == c) ){
        alert("1")
    }
}


function task20() {
    alert("task 20")
    a = (prompt("введите точку а"))
    b = (prompt("введите точку b"))
    c = (prompt("введите точку c"))
    if (b > c) {
        alert ("точка С ближе к точке А")
    }
    if (b < c) {
        alert ("точка B ближе к точке А")
    }
}



function task21() {
    alert("task 21")
    let x = prompt("введите координату х")
    let y = prompt("введите координату y")
    if ((x == 0) && (y == 0)){
        alert ('0')
    }
    else{
        if ((x == 0) || (y == 0)){
            alert ('1')
        }
        else{
            alert ('2')
        }
    }
}


function task22() {
    alert("task 22")
    let x = prompt("введите координату х")
    let y = prompt("введите координату y")
    if ((x > 0) && (y > 0)){
        alert ('1')
    }
    if ((x < 0) && (y > 0)){
        alert ('2')
    }
    if ((x < 0) && (y < 0)){
        alert ('3')
    }
    if ((x > 0) && (y < 0)){
        alert ('4')
    }
}