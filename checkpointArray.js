const hobbies = ['programar','ouvir musica','jogar volei', 'jogar', 'festas'];
console.log(hobbies[0]);
console.log(hobbies[1]);
console.log(hobbies[2]);

hobbies[0] = 'sofrer';
console.log(hobbies);

hobbies.length;
console.log(hobbies.length);

hobbies.push('videogame');
console.log(hobbies);

hobbies.pop();
console.log(hobbies);

let position = hobbies.indexOf('ouvir musica');
hobbies.splice(position, 1);
console.log(hobbies);

const hobbiesAmigo = ['cantar','dançar','musica'];

const todosOsHobbies = hobbies.concat(hobbiesAmigo);

const hobbiesMusicais = ['cantar', 'tocar guitarra', 'escutar música'];
const hobbiesEsportivos = ['correr', 'jogar futebol', 'nadar'];
const hobbiesCriativos = ['desenhar','escrever histórias', 'fazer esculturas'];

let categoriasHobbies = ['desenhar','escrever histórias', 'fazer esculturas'];
console.log(categoriasHobbies[0][2]);

//Exercicio 2

hobbies.forEach(function(hobby) {
    console.log("Olá, eu sou o hobby " + hobby + "!");
});

const nomeLivro = hobbies.map(function(hobby) {
    return "O incrível mundo de " + hobby;
});
console.log(nomeLivro);

const catalogoLivros = ['Harry potter', 'Lino', 'Animais fantasticos']
const mapCatalogo = catalogoLivros.map(function(hobby){
    return 'o livro que eu gosto é ' + hobby;
});
console.log(mapCatalogo)

const dHobbies = hobbies.filter(function(hobby) {
    return hobby[0] === 'j';
});
console.log(dHobbies)

const filterHobbies = hobbies.filter(function(hobby) {
    return hobby[0] === 's';
});
console.log(filterHobbies)

const runningPosition = hobbies.findIndex(function(hobby) {
    return hobby === 'jogar volei';
});
console.log("Jogar volei está na posição: " + runningPosition);

const allHobbies = hobbies.reduce(function(accumulator, hobby) {
    return accumulator + " e " + hobby; }, "");   
console.log("Meus hobbies são: " + allHobbies);

const hasSHobby = hobbies.some(function(hobby) {
    return hobby[0] === 's'; });
    
console.log("Eu tenho um hobby que começa com 's'? " + hasSHobby);

const allShort = hobbies.every(function(hobby) { return hobby.length < 15; });
console.log("Todos os meus hobbies têm menos de 15 letras? " + allShort);

const minuShort = hobbies.every(function(hobby) { return hobby === hobby.toLocaleLowerCase(); });
console.log("Todos os meus hobbies têm letras minusculas? " + minuShort);

const elevenLetterHobby = hobbies.find(function(hobby) {
    return hobby.length === 11; });
console.log("Meu primeiro hobby com 11 letras é: " + elevenLetterHobby);

const firstThreeHobbies = hobbies.slice(0, 3); console.log("Meus três primeiros hobbies são: ",
firstThreeHobbies);