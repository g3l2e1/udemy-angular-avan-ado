
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Category } from './categories/shared/category.model';

export class InMemoryDatabase implements InMemoryDbService {
  createDb(){
    const categories: Category[] = [
      { id: 1, name: "Moradia", description: "pagamentos de contas da casa" },
      { id: 2, name: "Saúde", description: "Plano de sáude e remédios" },
      { id: 3, name: "Lazer", description: "Cinema, praia, parque, etc." },
      { id: 4, name: "Salário", description: "Recebimento de salário" },
      { id: 5, name: "Freelas", description: "Trabalhos de freelancer" }
    ];
    return { categories }
  }
}
