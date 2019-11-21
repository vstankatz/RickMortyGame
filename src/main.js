import {Characters, Quotes} from './apicalls.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';



const quote = new Quotes();
const mainCharacter = new Characters();
// let charName = mainCharacter.name[1];
function getElements(response) {
  // $(`img#${charName}`).attr('src', response.image);
  console.log(response);
  // console.log(charName);
}

(async function characterGrab(character) {
  const response = await mainCharacter.getCharacters(character);
  getElements(response);
  console.log("async function");
})();

(async function intialCharacter() {
  await mainCharacter.initialChars();
  console.log(mainCharacter.image[0]);
  $('img#rick').attr('src', mainCharacter.image[0]);
  $('img#morty').attr('src', mainCharacter.image[1]);
  $('img#jerry').attr('src', mainCharacter.image[2]);
})();

function getRandom(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min
}

$(document).ready(function() {


  $('form#pickCharacter').submit(function(event) {
    event.preventDefault();
    $(".sceneOne").show();
    $(".pickCharacter").hide();
    let main = $("input[name=characterChoice]:checked").val();
    const newCharacter = new Characters(main);

    (async function mentor() {
      let indexRick = getRandom(1,20);
      console.log(indexRick);
      let character = '?name=rick'
      let response = await newCharacter.getCharacters(character);
      getElements(response);
      $('img.rickTrick').attr('src', response.results[`${indexRick}`].image);
      $('.rickTrickName').text(response.results[`${indexRick}`].name);
      let norrisResponse = await quote.getNorris();
      getElements(norrisResponse);
      $('#norris1').text(norrisResponse.value.joke);
      $('img.mainCharacter').attr('src', mainCharacter.image[main]);
      let dadJoke = await quote.getDad();
      getElements(dadJoke);
      $('.mainCharacterName').text(mainCharacter.name[main]);
      $('#mainWords1').text(dadJoke.attachments[0].fallback);
    })()


  $("#sceneOneContinue").click(function(){
    $(".sceneOne").hide()
    $(".sceneTwo").show();
    $('img.mainCharacter').attr('src', mainCharacter.image[main]);
    (async function battle() {
      let indexRick = getRandom(1,20);
      let character = '?name=rick'
      let response = await newCharacter.getCharacters(character);
      getElements(response);
      $('img#kanyeRickImg').attr('src', response.results[`${indexRick}`].image);
      $('.kanyeRickName').text('Kanye Rick West');
      let kanyeResponse = await quote.getKanye();
      getElements(kanyeResponse);
      $('#kanye1').text(kanyeResponse.quote);


      $('img.mainCharacter').attr('src', mainCharacter.image[main]);
      let dadJoke = await quote.getDad();
      getElements(dadJoke);
      $('.mainCharacterName').text(mainCharacter.name[main]);
      $('#mainWords2').text(dadJoke.attachments[0].fallback);
    })()

  })

  $('#sceneTwoContinue').click(function() {
      $('.sceneTwo').hide();
      $('.sceneThree').show();
      $('img.mainCharacter').attr('src', mainCharacter.image[main]);

      (async function battle2() {
        let indexRick = getRandom(1,20);
        let character = '?name=rick'
        let response = await newCharacter.getCharacters(character);
        getElements(response);
        $('img#darthRickImg').attr('src', response.results[`${indexRick}`].image);
        $('.darthRickName').text('Darth SkyRicker');
        let darthResponse = await quote.getStars();
        getElements(darthResponse);
        $('#darth').text(darthResponse.starWarsQuote);
        $('img.mainCharacter').attr('src', mainCharacter.image[main]);
        let dadJoke = await quote.getDad();
        getElements(dadJoke);
        $('.mainCharacterName').text(mainCharacter.name[main]);
        $('#mainWords3').text(dadJoke.attachments[0].fallback);
      })()


  })

  })
});
