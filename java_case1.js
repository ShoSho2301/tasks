// function task() {    
//     alert("task ")
// }


function task1() {    
    alert("task 1")
    let a = 0
    a = +prompt("введите число a от 1 до 7")
    switch (a){
        case 1: 
            alert("понидельник")
            break;
        case 2: 
            alert("вторник")
            break;
        case 3:
            alert("среда");
            break;
        case 4: 
            alert("четверг")
            break;
        case 5: 
            alert("пятница")
            break;
        case 6: 
            alert("субота")
            break;
        case 7:
            alert("воскресенье")
            break;
    }
}


function task2() {    
    alert("task 2")
    let a = 0
    a = +prompt("введите число a от 1 до 5")
    switch (a){
        case 1: 
            alert("плохо")
            break;
        case 2: 
            alert("неудотворительно")
            break;
        case 3:
            alert("удотворительно");
            break;
        case 4: 
            alert("хорошо")
            break;
        case 5: 
            alert("отлично")
            break;
    }
}



function task3() {    
    alert("task 3-4")
    let a = 0
    a = +prompt("введите число a от 1 до 12")
    switch (a){
        case 1: 
            alert("январь")
            alert("31 день")
            break;
        case 2: 
            alert("февраль")
            alert("зима")
            alert("28 дней")
            break;
        case 3:
            alert("март")
            alert("весна")
            alert("31 день")
            break;
        case 4: 
            alert("апрель")
            alert("весна")
            alert("30 дней")
            break;
        case 5: 
            alert("май")
            alert("весна")
            alert("31 день")
            break;
        case 6: 
            alert("июнь")
            alert("лето")
            alert("30 дней")
            break;
        case 7:
            alert("июль")
            alert("лето")
            alert("31 день")
            break;
        case 8:
            alert("август")
            alert("лето")
            alert("31 день")
            break;
        case 9: 
            alert("сентябрь")
            alert("осень")
            alert("30 дней")
            break;
        case 10: 
            alert("октябырь")
            alert("осень")
            alert("31 день")
            break;
        case 11: 
            alert("ноябырь")
            alert("осень")
            alert("30 дней")
            break;
        case 12:
            alert("декабырь")
            alert("зима")
            alert("31 день")
            break;
    }
}


function task5() {    
    alert("task 5")
    let N, b, k=0
    N = +prompt("введите число N от 1 до 4")
    a = +prompt("введите число a")
    b = +prompt("введите число b")
    switch (N){
        case 1: 
            k = a + b
            alert("summa = " + k)
            break;
        case 2: 
            k = a - b
            alert("raznica = " +k)
            break;
        case 3:
            k = a * b
            alert("proizvedenie = " + k);
            break;
        case 4: 
            k = a / b
            alert("delenie = " + k)
            break;
    }
}



function task6() {    
    alert("task 6")
    let N, b, k=0
    N = +prompt("введите число N от 1 до 5")
    a = +prompt("введите число a")
    switch (N){
        case 1: 
            k = a / 10
            alert(k + "dizemetr v metr" + k)
            break;
        case 2: 
            k = a * 1000
            alert(" kilometr v metr " + k)
            break;
        case 3:
            k = a
            alert("metr " + k);
            break;
        case 4: 
            k = a / 100
            alert("milimetr v metr " + k)
            break;
            case 5: 
            k = a / 1000
            alert("santimetr v metr " + k)
            break;
    }
}