import Item from './Item';

export default class FreightCalculator {

  static getMinimumFee() {
    return 10;
  }
  static getDefaultDistance() {
    return 1000;
  }

  static calculate(item: Item) {
    const total = FreightCalculator.getDefaultDistance() * item.getVolume() * (item.getDensity() /100);
    return Math.max(FreightCalculator.getMinimumFee(), total);
  }
}