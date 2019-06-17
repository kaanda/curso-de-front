import { Evento, IEvento } from './Evento';

//lista dos eventos - criando tabela dinamicamente
const objEvento: IEvento = new Evento();

const tabela = document.getElementById("lista-de-eventos");
const todosEventos = objEvento.getTodosEventos();

let linhas = ``;

// um foreach para criar as linhas da tabela, recebendo os valores
todosEventos.forEach((evento: IEvento) => {
    linhas += `<tr>
                <td>${evento.titulo}</td>
                <td>${evento.horario}</td>
            </tr>`;
});

//adicionando o conteúdo das linhas dinamicamente, sem precisar das refresh
tabela.innerHTML = linhas;

//Captura do formulário
const form = document.getElementById("form-adicionar-evento");
console.log(form);

//
form.addEventListener("submit", Event => {
    Event.preventDefault();
    const titulo = document.getElementById("titulo_do_evento").nodeValue;
    const horario = document.getElementById("horario_do_evento").nodeValue;

    const evento = new Evento();
    evento.adicionarNovoEvento(titulo, horario);
});