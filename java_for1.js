function task1() {    
    alert("task 1")
    N = prompt("введите число N")
    let K
    K = prompt("введите число K")
    for(i=1; i<=N; i++){
        alert(K)
    }
}


// function task2() {    
//     alert("task 2")
//     let A
//     A = prompt("введите число A")
//     let B
//     B = prompt("введите число B, B>A")
//     N = B - A + 2
//     for(i=1; i<=B; i++){
//         K = A + i
//         alert(K)
//     }
//     alert(N)
// }





function task12() {    
    alert("task 12")
    let N, p=1, a=1.1
    N = prompt("введите число N")
    for(let i = 1; i<N+1; i++) {
        p=p*a
        a=a+0.1
    }
    alert(p)
}


function task13() {    
    alert("task 13")
    let y, s
    s = 1.1
    y = 1.1
    N = prompt("введите число N")
    for( i = 1; i<N; i++) {
        y = y + 0.1
        s = s +((-1)**i)*y
    }
    alert(s)
}

i=i+2

function task15() {    
    alert("task 15")
    let A
    N = prompt("введите число N")
    A = prompt("введите число A")
    for (i=1; i<=N; i++){
        A = A**i
        alert(A)
    }
}



function task16() {    
    alert("task 16")
    N = prompt("введите число N")
    A = prompt("введите число A")
    let Z
    for(i=0; i<=N; i++){
        Z = A**i
        if(Z==Math.trunc(A**i)){
            alert(Z)
        }
        else{
            alert("None :)")
        }
    }
}


function task17() {    
    alert("task 17")
    N = prompt("введите число N")
    A = prompt("введите число A")
    let Z
    let sum = 1
    for (i=1; i<=N; i++){
        Z = A**i
        sum = sum + Z
    }
    alert(sum)
}


function task18() {    
    alert("task 18")
    N = prompt("введите число N")
    A = prompt("введите число A")
    let Z
    let sum = 0
    for (i=1; i<=N; i++){
        Z = A**i
        sum = sum+((-1)**i)*Z
    }
    alert(sum)
}