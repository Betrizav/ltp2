class Pessoa {
    constructor(nome, idade, cpf, endNumRua, rua, endBairro){
        this.nome = nome,
        this.idade = idade,
        this.cpf = cpf,
        this.endNumRua = endNumRua,
        this.rua = rua,
        this.endBairro = endBairro
    }
    static gerarId(){
        return Math.floor(Math.random()*30);
    }
}