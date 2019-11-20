export class Characters {

  async getCharacters(character) {
    try {
      let response = await fetch(`https://rickandmortyapi.com/api/character/${character}`)
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
  } catch(error) {

    console.error("There was an error handling your request: " + error.message);
  }
}
}
