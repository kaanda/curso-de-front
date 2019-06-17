"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Evento = /** @class */ (function () {
    function Evento() {
    }
    Evento.prototype.adicionarNovoEvento = function (titulo, horario) {
        var todos = localStorage.getItem("eventos") ?
            JSON.parse(localStorage.getItem("eventos")) :
            []; // todos é um array, se tiver algum ítem nesse array, ele criar no JSON um array com os dados, senão, ele cria uma array vazio. Isso busca no banco todos os Eventos já cadastrados e retorna como JSON -
        var evento = new Evento();
        evento.titulo = titulo;
        evento.horario = horario;
        //adiciona um Evento novo na lista Eventos
        todos.push(evento);
        //quando eu recebo os valores do array em JSON, o JSON é um objeto, não é uma string, logo, preciso transformar em string com a função stringify()
        localStorage.setItem("eventos", JSON.stringify(todos)); // isso salva os Evntos no banco (depois de adicionar mais um na lista)
    };
    //busca os eventos
    Evento.prototype.getTodosEventos = function () {
        return JSON.parse(localStorage.getItem("eventos"));
    };
    return Evento;
}());
exports.Evento = Evento;
//# sourceMappingURL=Evento.js.map