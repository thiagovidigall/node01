export default class Shipping {
  constructor(
    readonly distance: number = 1000,    
    readonly width: number,
    readonly height: number,
    readonly length: number,
    readonly weigth: number
  ) {}

 // distance = 1000km;

  getMinimumFee() {
    return 10;
  }

  calculeteVolumeinCentimetersToMeters() {
    return (this.width / 100) * (this.height / 100) * (this.length / 100);
  }

  calculeteDensityInKilosByMeters() :number {
    return this.weigth / this.calculeteVolumeinCentimetersToMeters();
  }

  calculeteFee() {
    const total = this.distance * this.calculeteVolumeinCentimetersToMeters() * (this.calculeteDensityInKilosByMeters() /100);
    // if (total < this.getMinimumFee()) return this.getMinimumFee();
    // return total;
    return Math.max(this.getMinimumFee(), total);
  }
}
