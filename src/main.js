import {Characters} from './apicalls.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const mainCharacter = new Characters();
let charName = mainCharacter.name[1];
function getElements(response) {
  $(`img#${charName}`).attr('src', response.image);
  console.log(response.image);
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



$(document).ready(function() {


$('form#pickCharacter').submit(function(event) {
  event.preventDefault();
  let character = $("input[name=characterChoice]:checked").val();
  console.log(character);

})
});
