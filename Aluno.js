class Aluno extends Pessoa{
    constructor(nome, idade, cpf, endNumRua, rua, endBairro){
        super(nome, idade, cpf, endNumRua, rua, endBairro);
        this.id = Pessoa.gerarId();
    }
}