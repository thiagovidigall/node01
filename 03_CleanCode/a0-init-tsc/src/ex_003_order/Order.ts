import Cpf from '../ex_001_cpf/Cpf';
import Coupon from './Coupon';
import Item from './Item';
import OrderItem from './OrderItem';

export default class Order {
  // cpf: string;
  cpf: Cpf;
  orderItens: OrderItem[] = [];
  coupon: Coupon | undefined;

  constructor(cpfRaw: string) {
    // const cpf = new Cpf(cpfRaw);
    // if(!cpf) throw new Error("Invalid order");
    // this.cpf = cpf.value;
    this.cpf = new Cpf(cpfRaw);  // dependencia por associação
  }

  addItem(item: Item, amount: number){
    this.orderItens.push(new OrderItem(item.id, item.price, amount));
  }

  addCoupon(coupon: Coupon) {
    if(coupon.isExpired()) return;
    this.coupon = coupon;
  }

  getTotal() {
    let total = 0;
    this.orderItens.forEach(element => {
      total += element.getTotal();
    });

    if(this.coupon) {
      return total -= total * this.coupon.percentage / 100;
    }
    return total;
  }
}
