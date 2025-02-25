const number = Number (prompt ( 'Zadejte číslo od 0 do 36.'));
let type = '';
let color = '';

if (number === 0) {
    document.body.innerHTML += '<p> Číslo 0 není ani sudé, ani liché a je zelené </p>';
} 

if ((number >= 1  && number <= 10) || (number >= 19 && number <= 28)) {
    if (number % 2 === 0) {
        type = 'sudé'
        color = 'černé'
    document.body.innerHTML += '<p> Číslo je sudé a černé </p>';
} else {
        type = 'liché'
        color = 'červené'
    document.body.innerHTML += '<p> Číslo je liché a červené </p>';
    }
} else {
    if (number % 2 === 0) {
        type = 'sudé'
        color = 'červené'
    document.body.innerHTML += '<p> Číslo je sudé a červené </p>';

} else {
        type = 'liché'
        color = 'černé'
    document.body.innerHTML += '<p> Číslo je liché a černé </p>';
    }
}
