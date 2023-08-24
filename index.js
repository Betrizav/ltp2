let cadastrar = function(){
    let inputNome = document.getElementById("nome");
    let nome = inputNome.value;

    let inputIdade = document.getElementById("idade");
    let idade = inputIdade.value;

    
    let inputCpf = document.getElementById("cpf");
    let cpf = inputCpf.value;

    let inputEndereco = document.getElementById("endNumRua");
    let endNumRua = inputEndereco.value;

    let inputRua = document.getElementById("rua");
    let rua = inputRua.value;

    let inputBairro = document.getElementById("endBairro");
    let endBairro = inputBairro.value;
    
    let aluno = new Aluno(nome , idade, cpf, endNumRua, rua, endBairro);



    let linhaTabela = document.createElement('tr');
    let tabela = document.getElementById("tabela");

    tabela.appendChild(linhaTabela);
    

    let tdNome = document.createElement('td');
    let textNome = document.createTextNode(aluno.nome);

    tdNome.appendChild(textNome);
    linhaTabela.appendChild(tdNome);



    let tdIdade = document.createElement('td');
    let textIdade = document.createTextNode(aluno.idade);

    tdIdade.appendChild(textIdade);
    linhaTabela.appendChild(tdIdade);
    


    let tdCpf = document.createElement('td');
    let textCpf = document.createTextNode(aluno.cpf);

    tdCpf.appendChild(textCpf);
    linhaTabela.appendChild(tdCpf);
      
   

    let tdEndNumRua = document.createElement('td');
    let textEndNumRua = document.createTextNode(aluno.endNumRua);

    tdEndNumRua.appendChild(textEndNumRua);
    linhaTabela.appendChild(tdEndNumRua);



    let tdRua = document.createElement('td');
    let textRua = document.createTextNode(aluno.rua);


    tdRua.appendChild(textRua);
    linhaTabela.appendChild(tdRua);


    let tdEndBairro = document.createElement('td');
    let textEndBairro = document.createTextNode(aluno.endBairro);

    tdEndBairro.appendChild(textEndBairro);
    linhaTabela.appendChild(tdEndBairro);
    
}


    



