import Cpf from '../ex_001_cpf/Cpf';
import Coupon from './Coupon';
import Item from './Item';
import OrderItem from './OrderItem';

export default class Order {
  // cpf: string;
  cpf: Cpf;
  orderItens: OrderItem[] = [];
  coupon: Coupon | undefined;

  constructor(cpf: string, readonly orderCreated: Date = new Date()) {
    // const cpf = new Cpf(cpfRaw);
    // if(!cpf) throw new Error("Invalid order");
    // this.cpf = cpf.value;
    this.cpf = new Cpf(cpf);  // dependencia por associação
  }

  private amount() {
    let amount = 0;
    this.orderItens.forEach(element => {
      amount += element.getTotal();
    });
    return amount;
  }
  
  addItem(item: Item, amount: number){
    this.orderItens.push(new OrderItem(item.id, item.price, amount));
  }

  addCoupon(coupon: Coupon) {
    if(coupon.isExpired(this.orderCreated)) return;
    this.coupon = coupon;
  }

  getFreight() {
    return 0;
  }

  getTotal() {
    if (this.coupon) {
      return this.amount() - this.coupon.calculeteDiscount(this.amount(), this.orderCreated);
    }
    return this.amount();
  }
}
