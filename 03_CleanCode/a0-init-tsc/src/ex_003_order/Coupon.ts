export default class Coupon {
  constructor(readonly code: string, readonly percentage: number, readonly expiredDate?: Date) {}
  // apply(value: number) {
  //   return value - (value * this.percentage / 100);
  // }

  isValid(today: Date = new Date()) {
    if (!this.expiredDate) return true;   
    return this.expiredDate.getTime() >= today.getTime();
  }

  // isExpired () {
  //   if (!this.expiredDate) return false;
  //   const today = new Date();
  //   return this.expiredDate.getTime() < today.getTime();
  // }

  isExpired(today: Date = new Date()) {
    return !this.isValid(today);
  }
}
