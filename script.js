const pokeContainer = document.querySelector(".poke-container");
const pokeCount = 150;
const pokeColor = {
  normal: "#E6D5B8",
  fighting: "#E83A14",
  flying: "#EFFFFD",
  poison: "#890F0D",
  ground: "#CEAB93",
  rock: "#789395",
  bug: "#B4CFB0",
  ghost: "#203239",
  steel: "#2C3333",
  fire: "#F76E11",
  water: "#9AD0EC",
  grass: "#85C88A",
  electric: "#EEF2FF",
  psychic: "#676FA3",
  ice: "#D6E5FA",
  dragon: "#FF3F00",
  dark: "#333333",
  fairy: "#FFFDF9",
  unknown: "#524A4E",
  shadow: "#121212",
};
const fetchPokemon = () => {
  for (let i = 1; i <= pokeCount; i++) {
    pokemon(i);
  }
};
const pokemon = async function (id) {
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(apiUrl);
  const data = await res.json();
  console.log(data);
};
fetchPokemon();
