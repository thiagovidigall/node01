import FreightCalculator from './FreightCalculator';
import Item from './Item';

export default class DefaultFreightCalculator implements FreightCalculator{
  
  private getMinimumFee() {
    return 10;
  }
  private getDefaultDistance() {
    return 1000;
  }
  calculate(item: Item): number {
    const total = this.getDefaultDistance() * item.getVolume() * (item.getDensity() /100);
    return Math.max(this.getMinimumFee(), total);
  }
}