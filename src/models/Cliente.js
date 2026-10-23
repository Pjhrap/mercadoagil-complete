import { REGIAO_POR_UF } from '../config/regras.js';

export class Cliente {
  #dados;

  constructor({ nome, email, cpf, uf }) {
    this.#dados = { nome, email, cpf, uf };
  }

  get nome() {
    return this.#dados.nome;
  }

  get cpf() {
    return this.#dados.cpf;
  }

  get uf() {
    return this.#dados.uf;
  }

  // A região vem da UF do cliente, não é digitada
  get regiao() {
    return REGIAO_POR_UF[this.#dados.uf];
  }

  // LGPD: o rest tira o CPF antes de devolver os dados para qualquer tela
  paraExibicao() {
    const { cpf, ...publico } = this.#dados;
    return { ...publico, regiao: this.regiao };
  }
}
