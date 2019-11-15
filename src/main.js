import { User } from './calc.js';

import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $("#user-input").submit(function(event) {
    event.preventDefault();
    event.stopPropagation();
    let userName = $('#user-name').val();
    let userAge = $('#user-age').val();
    let userDeathAge = $('#user-death-age').val();
    let user = new User(userName, userAge, userDeathAge);
$('#other-age').text(user.age);

    // Object.keys(user.aging).forEach(key=>{
    //   $('#aging-selector').append("<option value=" + `${user.aging[key]}` + ">" + `${key}` + "</option>");
    // });
  });
});
