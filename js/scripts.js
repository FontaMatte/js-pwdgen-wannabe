// richiesta nome utente
const userName = prompt("Qual'e il tuo nome?");
console.log("l'utente si chiama: ",userName)

// richiesta cognome utente
const userSurname = prompt("Qual'e il tuo cognome?");
console.log("il cognome dell'utente e': ",userSurname)


// richiesta colore preferito
const userFavColor = prompt("Qual'e il tuo colore preferito?");
console.log("il colore preferito dell'utente e': ",userFavColor)

// stampo l'intera stringa sull'HTML
let userFavNumber = 21;
let userInfo = userName + userSurname + userFavColor + userFavNumber;
console.log(userInfo);

document.getElementById('userInfo').innerHTML = userInfo ;
