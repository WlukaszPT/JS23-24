//Create a function that takes in an array and returns its copy in reverse order (DON’T use .reverse() method!)
let arr=[2,4,1,6,8,7, 12,31,21];
let newArr=[];

function reverse(arr){
    for(let i=0; i<arr.length; i++){
    // console.log(arr[i]);
    newArr[i]=arr[arr.length-1-i]
console.log(arr[i], newArr[i] );
}
}
reverse(arr);