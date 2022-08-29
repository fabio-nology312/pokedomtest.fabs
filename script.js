import pokemonArray from "./data/pokemon.js";

const cardContainer = document.querySelector(".card-container");

const makeFirstLetterCapital = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const getTypesText = (types) => {
  if (types.length === 1) {
    return types[0];
  }

  if (types.length === 2) {
    return `${types[0]} & ${types[1]}`;
  }

  console.error("unhandled type array");
};

const createPokemonCards = () => {
  cardContainer.innerHTML = "";

  pokemonArray.forEach((pokemon) => {
    const nameWithCapital = makeFirstLetterCapital(pokemon.name);
    const typesText = getTypesText(pokemon.types);

    cardContainer.innerHTML += `
	<div class="card">
		<img
			class="card__image"
			src="${pokemon.sprite}"
		/>
		<div class="card__content">
			<h2 class="card__heading">${nameWithCapital}</h2>
			<p class="card__text">
				${nameWithCapital} (#${pokemon.id}) is a ${typesText} type pokemon.
	nameWithCApital
	</div>`;
  });
};

createPokemonCards();