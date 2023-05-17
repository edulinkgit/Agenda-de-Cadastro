const form = document.getElementById('form-cadastro');
const nome = [];
const telefone = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaDados(); 
});
    
function adicionaLinha() {

    const inputNomeCadastro = document.getElementById('nome-cadastro');
    const inputTelefoneCadastro = document.getElementById('telefone-cadastro');

    nome.push(inputNomeCadastro.value);
    telefone.push(parseInt(inputTelefoneCadastro.value));
    

    let linha = '<tr>';
    linha += `<td>${inputNomeCadastro.value}</td>`;
    linha += `<td>${inputTelefoneCadastro.value}</td>`;
    linha += `</tr>`;

    linhas+= linha;

    inputNomeCadastro.value = '';
    inputTelefoneCadastro.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaDados() {
    console.log(nome);
    console.log(telefone);
}
