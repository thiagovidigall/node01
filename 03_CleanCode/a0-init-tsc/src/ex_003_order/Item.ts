export default class Item {
  constructor(
    readonly id: number,
    readonly description: string,
    readonly category: string,
    readonly price: number,
    readonly width: number = 0,
    readonly height: number = 0,
    readonly length: number = 0,
    readonly weigth: number = 0
  ) {}

  getVolume () {
    if (this.width === 0 || this.height === 0 || this.length === 0) return 0;
    return (this.width / 100) * (this.height / 100) * (this.length / 100);;
  }

  getDensity () {
    if (this.weigth === 0) return 0;
    return this.weigth / this.getVolume();
  }
}
