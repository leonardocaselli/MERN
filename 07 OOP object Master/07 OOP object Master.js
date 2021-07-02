const pokemons = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["flying","water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

//console.log(pokemon);
// Lista de pokemons que comiencen por B
console.log(pokemons[0].name[0])
// const startWithB = pokemon => (pokemon.name[0] === "B") ? true : false
const startWithB = pokemon => pokemon.name[0] === "B"
const bListPokemons = pokemons.filter(startWithB)
console.log(bListPokemons)

console.log("----  lista dos B --------")
const bListPkmn = pokemons.filter( p => p.name[0] === "B" );
console.log(bListPkmn)


console.log("----   matriz de solo los identificadores--------")
const pkmnIds = pokemons.map( p => p.id )
console.log(pkmnIds);


console.log("Pokémon donde la identificación es divisible por 3");
const Idpar= pokemons.filter(p=> p.id %2 ===0);
console.log(Idpar);

const DivideListId =pokemons.filter(p=> p.id %3 ===0);
console.log(DivideListId);

console.log("pokemont tipo fuego fire");
const FirePokemons=pokemons.filter(p =>p.types.includes("fire"));
console.log(FirePokemons);

console.log("pokemont mas de un tipo type");
const moreThanOneType = pokemons.filter(p=> p.types.length > 1);
console.log(moreThanOneType);

console.log("pokemont por nombre name");
const namePokemon = pokemons.map(p=> p.name);
console.log(namePokemon);

console.log("matriz con solo los nombres de Pokémon con una identificación mayor que 99");

const highId= pokemons.filter(p=> p.id>99);
console.log(highId);
const highName=highId.map(p=>p.name);
console.log(highName);

console.log("pokémon cuyo único tipo es veneno poison");
const poisonPokemon= pokemons.filter(p=>p.types.includes("poison")&& p.types.length==1).map((p)=>p.name);
console.log(poisonPokemon);

console.log("una matriz que contiene solo el primer tipo de todos los Pokémon cuyo segundo tipo es volador flying");
const flypokemon=pokemons.filter(p=>p.types[1]==="flying").map((p)=>p.types[0]);
console.log(flypokemon);
//cosnt firstType=flypokemon.map((p)=>p.types[0]);
//console.log(firstType);

console.log("un recuento de la cantidad de pokémon que son de tipo normal");
const normalPokemon=pokemons.filter(p=>p.types.includes("normal"));
console.log(normalPokemon.length);