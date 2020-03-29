//Création d'une boucle for pour itérer sur toutes les valeurs du tableau "prenoms"

//Supprimer les doublons du tableau "prenoms"
function getUnique(array){
    const uniqueArray = [];

    for(i=0; i < array.length; i++){
        if(uniqueArray.indexOf(array[i]) === -1){
            uniqueArray.push(array[i]);
        }
    }
    return uniqueArray; 
}

const prenoms = ["Thomas", "Sarah", "Alexandre","Alexandre",, "Mélodie", "Jonathan", "Laure"];
const uniquePrenoms = getUnique(prenoms);
console.log(uniquePrenoms);

//Faites une concaténation du tableau "prenoms" en chaîne de caractères avec le séparateur suivant ", "
//Afficher le résultat dans la console
console.log(uniquePrenoms.join(","));
