"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Evento_1 = require("./Evento");
//lista dos eventos - criando tabela dinamicamente
var objEvento = new Evento_1.Evento();
var tabela = document.getElementById("lista-de-eventos");
var todosEventos = objEvento.getTodosEventos();
var linhas = "";
// um foreach para criar as linhas da tabela, recebendo os valores
todosEventos.forEach(function (evento) {
    linhas += "<tr>\n                <td>" + evento.titulo + "</td>\n                <td>" + evento.horario + "</td>\n            </tr>";
});
//adicionando o conteúdo das linhas dinamicamente, sem precisar das refresh
tabela.innerHTML = linhas;
//Captura do formulário
var form = document.getElementById("form-adicionar-evento");
console.log(form);
//
form.addEventListener("submit", function (Event) {
    Event.preventDefault();
    var titulo = document.getElementById("titulo_do_evento").nodeValue;
    var horario = document.getElementById("horario_do_evento").nodeValue;
    var evento = new Evento_1.Evento();
    evento.adicionarNovoEvento(titulo, horario);
});
//# sourceMappingURL=index.js.map