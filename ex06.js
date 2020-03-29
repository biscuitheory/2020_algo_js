//Fonction qui retourne true
const hello = () => {
    return true;
}

resultat = hello();
    console.log(resultat)


//Fonction qui prend en paramètre une chaîne de caractères et qui retourne cette même chaîne
const stringReturn = (str) => {
    return str;
}

resultat = (stringReturn);
    console.log(resultat)

//Fonction qui prend en paramètre deux chaînes de caractères et qui renvoit la concaténation de ces deux chaînes    
const concatenation = (str, nb, str2) => {
    return str + nb + str2;
}

let conca = concatenation("J'ai ", 28, " ans");

console.log(conca)

//Fonction qui prend en paramètre deux nombres
const numbers = (nb1, nb2) => {
    if (nb1 > nb2) {
        return 'Le premier nombre est plus grand';
    } else if (nb1 < nb2) {
        return 'Le premier nombre est plus petit';
    } else if (nb1 == nb2) {
        return 'Les deux nombres sont identiques';
    }
    numbers(6,6);
};
    console.log(numbers(6, 6));