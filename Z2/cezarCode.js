let text = "postawowy text";
let textString;//"abc cosik i już";
let textString2;

let length=text.length;
console.log(text);
let textCoded=[];//zakodowany  tablica znaków
let textUnCoded=[];
let alp=["a", "ą", "b", "c", "ć", "d", "e", "ę", "f", "g", "h", "i", "j", "k", "l", "ł", "m","n", "o", "ó", "p", "q", "r", "s", "ś","t", "u", "v", "w", "x", "y", "z", "ź", "ż"];
function cezarCode(text, x){
    let key=x+1; //klucz wg którego kodujemy stringa
    let text2=text.split("");// Tworzymy tablicę ze stringa text
    console.log(text2);
    for(i=0; i<length; i++){ //Każdy element nowej tablicy przypisujemy do nowej tablicy textCode z uwz. keya
    let index=alp.indexOf(text2[i]);
    let index2=index+key;
    // console.log(index2);
    if(index>=0){//Jesli symbol znajduje się w tablicy znaków alp
        if(index2>=alp.length){ //Jeśli po dodaniu key index przewyższa liczbę znaków w alp
            index2=index2-alp.length;
        }
    textCoded[i]=alp[index2];
    
    }else{
        textCoded[i]=" ";// Jeśli danego znaku nie ma w alp np:" " to zakładamy że jest to " "
    }
    // console.log(index);
    }
    console.log(textCoded);
    textString=textCoded.toString(textCoded);
    textString=textString.replaceAll(",","");
    console.log(`Zakodowany text to: ${textString}`);

}

function  decrypted(decrypted, x){
    let key=x+1;
    let text2=textString.split("");// Tworzymy tablicę ze stringa text
    console.log(text2);
    let length2=textString.length;
    for(i=0; i<length2; i++){ //Każdy element nowej tablicy przypisujemy do nowej tablicy textCode z uwz.keya
        let index=alp.indexOf(text2[i])
        if(index==-1){
            textUnCoded[i]=" ";
        }else{
        let index2=index-key;
        if(index2<0){
            index2=alp.length+index2;
        }
        
        textUnCoded[i]=alp[index2];
        }
        }
        console.log(textUnCoded);
        textString2=textUnCoded.toString(textUnCoded);
        textString2=textString2.replaceAll(",","");
        console.log(`Odkodowany text to: "${textString2}"`);

}

cezarCode(text,5);
decrypted(textCoded,5);

