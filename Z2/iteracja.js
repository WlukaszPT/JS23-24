//Przy podanej wartości początkowej równej 0. Iteruj tablicę, dodając elementy parzyste i odejmując nieparzyste.
//25.20.2023 ok

let arr = [1,6,23,8,4,98,3,7,3,98,4,98]
let sum=0;

function sumOddItems(arr){
    for(let i=0; i<arr.length; i++){
        arr[i]%2==0? sum=sum+arr[i]: sum=sum-arr[i];
}
console.log(`Wartość zmiennej sum to: ${sum}`);
}
sumOddItems(arr);
