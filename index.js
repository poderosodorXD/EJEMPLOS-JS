// Import stylesheets
import './style.css';
// Import Jquery
import $ from 'jquery';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starterhhhhhhhhh</h1>`;

const numero = 3*4;

var textoParrafo = $("#TEXTO").text();
console.log("Jquery: ",textoParrafo);

$("#TEXTO").html(`<h2>Etiqueta H2 ${numero} tercer cambio</h2> `);
