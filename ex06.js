/*function hello() {
    return true;
}*/

const hello = () => {
    return true;
}

resultat = hello();
    console.log(resultat)

const stringReturn = (str) => {
    return str;
}

resultat = (stringReturn);
    console.log(resultat)

let name = 'tutu'

let myName = stringReturn(name);
console.log(myName);

const concatenation = (str, nb, str2) => {
    return str + nb + str2;
}

let conca = concatenation("j'ai ", 28, " ans");

console.log(conca)

let text = 'Hello World';
let text1 = 'Hello World';
let text2 = 'Hello World';

const displayText = (unText) =>{
    console.log(unText)

}

displayText(text);

displayText(text2);