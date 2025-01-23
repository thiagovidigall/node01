export default class Coupon {
  constructor(readonly code: string, readonly percentage: number, readonly expiredDate?: Date) {}
  // apply(value: number) {
  //   return value - (value * this.percentage / 100);
  // }

  isValid(requestDate: Date = new Date()) {
    if (!this.expiredDate) return true;   
    return this.expiredDate.getTime() >= requestDate.getTime();
  }

  // isExpired () {
  //   if (!this.expiredDate) return false;
  //   const requestDate = new Date();
  //   return this.expiredDate.getTime() < requestDate.getTime();
  // }

  isExpired(requestDate: Date = new Date()) {
    return !this.isValid(requestDate);
  }

  calculeteDiscount(amount: number, today: Date = new Date) {
    if (this.isExpired(today)) return 0;
    return amount * this.percentage / 100;
  }
}
