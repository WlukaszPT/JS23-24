//Ile dni pozostało do piatku 25.10.2023 ok

function tillFriday(){
    let currentDay=new Date().getDay();
    console.log(currentDay);
    switch (currentDay){
            case 4:
            console.log("Do piatku pozostał 1 dzień");
            break;
            case 3:
            console.log("Do piatku pozostały 2 dni");
            break;
            case 2:
            console.log("Do piatku pozostały 3 dni");
            break;
            case 1:
            console.log("Do piatku pozostały 4 dni");
            break;
            case 0:
            console.log("Do piatku pozostały 5 dni");
            break;
            case 6:
            console.log("Do piatku pozostały 6 dni");
            break;
            case 5:
            console.log("Dziś jest piątek!!!");
            break;
    }
   
}

tillFriday();