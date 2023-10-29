//Oblicz sumę nieparzystych elementów 25.10.2023 ok, działa.


let arr = [1,6,23,8,4,98,3,7,3,98,4,98]
let sum=0;

function sumOddItems(arr){
    for(let i=0; i<arr.length; i++){
    if(arr[i]%2!==0){
        sum=sum+arr[i];
    }
}
console.log(`Suma nieparzystych elementów to: ${sum}`);
}
sumOddItems(arr);
