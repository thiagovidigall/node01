import Shipping from '../src/ex_003_order/Shipping';

test('Deve calcular o frete', function () {
  // distancia(km)
  // volume(m3) = Comprimento (L) x Largura (W) x Altura (H)
  // densidade(kg/m3) = peso / volume 
  const shipping = new Shipping(1000, 100, 30, 10, 2);
  expect(shipping).toBeTruthy();
})

test('Deve calcular o frete do produto 1', function () {
  const shipping = new Shipping(1000, 100, 30, 10, 3);
  expect(shipping.calculeteFee()).toBe(30);
})

test('Deve calcular o frete do produto 2', function () { 
  const shipping = new Shipping(1000, 100, 50, 50, 20);
  expect(shipping.calculeteFee()).toBe(200);
})

test('Deve calcular o frete do produto 3', function () { 
  const shipping = new Shipping(1000, 10, 10, 10, 0.9);
  expect(shipping.calculeteFee()).toBe(10);
})