import Cpf from '../ex_001_cpf/Cpf';
import Coupon from './Coupon';
import FreightCalculator from './FreightCalculator';
import Item from './Item';
import OrderItem from './OrderItem';

export default class Order {
  cpf: Cpf;
  private orderItens: OrderItem[] = [];
  coupon: Coupon | undefined;
  private freight: number;

  constructor(
    cpf: string,
    readonly orderCreated: Date = new Date(),
    readonly freightCalculator: FreightCalculator
  ) {
    this.cpf = new Cpf(cpf); // dependencia por associação
    this.freight = 0;
  }

  private amount() {
    let amount = 0;
    this.orderItens.forEach((element) => {
      amount += element.getTotal();
    });
    return amount;
  }

  addItem(item: Item, amount: number) {
    const itemFreight = this.freightCalculator.calculate(item) * amount;
    this.freight += itemFreight;
    this.orderItens.push(new OrderItem(item.id, item.price, amount));
  }

  addCoupon(coupon: Coupon) {
    if (coupon.isExpired(this.orderCreated)) return;
    this.coupon = coupon;
  }

  getFreight() {
    return this.freight;
  }

  getTotal() {
    if (this.coupon) {
      return (
        this.amount() -
        this.coupon.calculeteDiscount(this.amount(), this.orderCreated)
      );
    }
    return this.amount();
  }
}
