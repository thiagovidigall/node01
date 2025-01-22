import Coupon from '../src/ex_003_order/Coupon';

test("Deve criar um cupom de desconto válido", function () {
  const coupon = new Coupon("VALE10", 10, new Date("2025-01-22"));
  const today = new Date("2025-01-20")
  const isValid = coupon.isValid(today);
  expect(isValid).toBeTruthy();
})

test("Deve criar um cupom de desconto expirado", function () {
  const coupon = new Coupon("VALE10", 10, new Date("2024-01-22"));
  const today = new Date("2025-01-20")
  const isExpired = coupon.isExpired(today);
  expect(isExpired).toBeTruthy();
})