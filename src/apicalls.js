
export class Characters {
  constructor(mainCharacter) {
    this.mainCharacter = mainCharacter;
    this.image = [];
    this.name = [];
  }

  async getCharacters(character) {
    try {
      let response = await fetch(`https://rickandmortyapi.com/api/character/${character}`)
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {

      console.error("There was an error handling your request: " + error.message);
    }
  }

  async initialChars() {
    try {
      let charArray = [1,2,5];
      for (let i=0; i<charArray.length; i++) {
        let thisResponse = await this.getCharacters(charArray[i]);
        this.image.push(thisResponse.image);
        this.name.push(thisResponse.name);
      }
      console.log(this.name, this.image);
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }
}
