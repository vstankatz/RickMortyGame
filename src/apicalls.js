
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
      console.log(jsonifiedResponse);
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

export class Quotes {


  async getNorris() {
    try {
      let response = await
      fetch(`http://api.icndb.com/jokes/random`)
      let jsonifiedResponse = await response.json();
      console.log(jsonifiedResponse);
      return jsonifiedResponse;
    }catch(error) {
      console.error("There was an error handling your request: " + error.message);

    }
  }

  async getDad() {
    try {
      let response = await
      fetch('https://icanhazdadjoke.com/slack',
        { headers: {
      'Content-Type': 'application/json'}
    }); //THIS IS HERE TO GRAB ACCEPT HEADER /SLACK HELPS AS DOES HEADERS:... ONLY BOTH WORKED FOR SOME REASON, NOT ONE.

      let jsonifiedResponse = await response.json();
      console.log(jsonifiedResponse);
      return jsonifiedResponse;
    }catch(error) {
      console.error("There was an error handling your request: " + error.message);

    }

  }
  async getKanye() {
    try {
      let response = await
      fetch('https://api.kanye.rest/');

      let jsonifiedResponse = await response.json();
      console.log(jsonifiedResponse);
      return jsonifiedResponse;
    }catch(error) {
      console.error("There was an error handling your request: " + error.message);

    }

  }

  async getStars() {
    try {
      let response = await
      fetch('http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote');
      let jsonifiedResponse = await response.json();
      console.log(jsonifiedResponse);
      return jsonifiedResponse;
    }catch(error) {
      console.error("There was an error handling your request: " + error.message);

    }

  }
}
