export default class Cupom {
  constructor(readonly code: string, readonly percentage: number) {}
  // apply(value: number) {
  //   return value - (value * this.percentage / 100);
  // }
}
