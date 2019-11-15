import { User } from './calc.js';
import $ from 'jquery';
import 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
$('#other-age').text('hi');
$(document).ready(function() {

  $("#user-info").submit(function(event) {
    event.preventDefault();
    let userName = $('#user-name').val();
    let userAge = $('#user-age').val();
    let userDeathAge = $('#user-death-age').val();
    let user = new User(userName, userAge, userDeathAge);
    $('#other-age').text(user.age);

    Object.keys(user.aging).forEach(key=>{
      $('#aging-selector').append("<option value=" + `${user.aging[key]}` + ">" + `${key}` + "</option>");
    });
  });
});
