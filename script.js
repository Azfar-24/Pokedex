const pokeContainer = document.querySelector(".poke-container");
const pokeCount = 250;
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
  fairy: "#FFC0D3",
  unknown: "#524A4E",
  shadow: "#121212",
};
console.log(pokeColor.dragon);
const fetchPokemon = async () => {
  pokeContainer.innerHTML = "";
  for (let i = 1; i <= pokeCount; i++) {
    await pokemon(i);
  }
};
const pokemon = async function (id) {
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(apiUrl);
  const data = await res.json();
  const type1 = data.types[0].type.name;
  console.log(type1);
  // console.log(pokeColor[type1]);
  // console.log(data);
  const name = data.name[0].toUpperCase() + data.name.slice(1);
  const html = `<div class="pokemon" style="background-color: ${
    pokeColor[type1]
  };">
  <div class="img">
      <img src="${data.sprites.front_default}" alt="${data.name}">
  </div>
  <div class="info">
      <span class="id">#${id.toString().padStart(3, 0)}</span>
      <h3 class="name">${name}</h3>
      <small class="type">Type: <span>${data.types[0].type.name}</span></small>
  </div>`;
  pokeContainer.insertAdjacentHTML("beforeend", html);
};
fetchPokemon();
