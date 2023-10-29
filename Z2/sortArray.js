//Posegreguj tablicę od najmniejszej do najwiekszej wartości
let arr=[1,3,2,8,12,11,15,45,31]
function sortt(){
    console.log(arr);
    for(let i=0; i<arr.length-1; i++){
        for(let k=0; k<arr.length-1; k++){
            let buf;
            let j=k+1;
            if(arr[k]<arr[j]){
            buf=arr[k];
            arr[k]=arr[j];
            arr[j]=buf;
            }
        }  
}
console.log(arr);
}

sortt(arr);