import { InMemoryDbService } from "angular2-in-memory-web-api";

export class InMemoryDatabaseService implements InMemoryDbService {
  createDb(){
    const categories = [
      { id: 1, nome: "Moradia", descricao: "pagamentos de contas da casa" },
      { id: 2, nome: "Saúde", descricao: "Plano de sáude e remédios" },
      { id: 3, nome: "Lazer", descricao: "Cinema, praia, parque, etc." },
      { id: 4, nome: "Salário", descricao: "Recebimento de salário" },
      { id: 5, nome: "Freelas", descricao: "Trabalhos de freelancer" }
    ];
    return { categories }
  }
}
