import {Characters} from './apicalls.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';



$(document).ready(function() {

  const mainCharacter = new Characters();

$('form#pickCharacter').submit(function(event) {
  event.preventDefault();
  let character = $("input[name=characterChoice]:checked").val();
  console.log(character);
    (async() => {
      const response = await mainCharacter.getCharacters(character);
      getElements(response);
      console.log("async function");
    })();
  function getElements(response) {
    $(`img#morty`).attr('src', response.image);
    console.log(response.image);
  }
})
});
