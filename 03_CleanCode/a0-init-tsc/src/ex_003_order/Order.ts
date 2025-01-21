import Cpf from '../ex_001_cpf/Cpf';
import Cupom from './Cupom';
import Item from './Item';
import OrderItem from './OrderItem';

export default class Order {
  // cpf: string;
  cpf: Cpf;
  orderItens: OrderItem[] = [];
  cupom: Cupom | undefined;

  constructor(cpfRaw: string) {
    // const cpf = new Cpf(cpfRaw);
    // if(!cpf) throw new Error("Invalid order");
    // this.cpf = cpf.value;
    this.cpf = new Cpf(cpfRaw);  // dependencia por associação
  }

  addItem(item: Item, amount: number){
    this.orderItens.push(new OrderItem(item.id, item.price, amount));
  }

  addCupom(cupom: Cupom) {
    this.cupom = cupom;
  }

  getTotal() {
    let total = 0;
    this.orderItens.forEach(element => {
      total += element.getTotal();
    });

    if(this.cupom) {
      return total -= total * this.cupom.percentage / 100;
    }
    return total;
  }
}
