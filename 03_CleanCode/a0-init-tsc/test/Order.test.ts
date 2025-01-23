import Cpf from '../src/ex_001_cpf/Cpf';
import Coupon from '../src/ex_003_order/Coupon';
import Item from '../src/ex_003_order/Item';
import Order from '../src/ex_003_order/Order';

test("deve criar um pedido informando o cpf", function () {
    const cpf = "839.435.452-10";
    const order = new Order(cpf);
    expect(order).toBeTruthy();
});

test("deve criar um pedido vazio com o cpf válido", function () {
    const cpf = "839.435.452-10";
    const order = new Order(cpf);
    const total = order.getTotal();
    expect(total).toBe(0);
});

test('deve apresentar erro ao criar um pedido vazio com CPF inválido', function() {
    const cpf = '111.111.111.=11'
    expect(() => new Cpf(cpf)).toThrow(new Error("Invalid cpf"));
})

test("deve criar um pedido com 3 itens", function () {
    const order = new Order("839.435.452-10");
    order.addItem(new Item(1, "Musica", "CD", 10), 3);
    order.addItem(new Item(2, "Video", "DVD", 20), 2);
    order.addItem(new Item(3, "Revista", "PDF", 7), 1);
    expect(order.getTotal()).toBe(77);
})

test("deve criar um pedido com cupom válido (aplica o desconto)", function() {
    const order = new Order("839.435.452-10");
    order.addItem(new Item(1, "Musica", "CD", 10), 3);
    order.addCoupon(new Coupon("VALE10", 10));
    expect(order.getTotal()).toBe(27);
})

test("deve criar um pedido com cupon expiado (não aplica o desconto)", function() {
    const order = new Order("839.435.452-10", new Date("2025-01-22"));
    order.addItem(new Item(1, "Musica", "CD", 10), 3);
    order.addCoupon(new Coupon("VALE10", 10, new Date("2024-01-25")));
    expect(order.getTotal()).toBe(30);
})

// test("deve criar um pedido com cupon válido e calcular o desconto (não aplica o desconto)", function() {
//     const order = new Order("839.435.452-10");
//     order.addItem(new Item(1, "Musica", "CD", 10), 3);
//     order.addCoupon(new Coupon("VALE10", 10));
//     const discount = order.getDiscount();
//     expect(discount).toBe(3);
// })

// test("deve criar um pedido com cupon válido e calcular o desconto (não aplica o desconto)", function() {
//     const order = new Order("839.435.452-10", new Date("2025-01-22"));
//     order.addItem(new Item(1, "Musica", "CD", 10), 3);
//     order.addCoupon(new Coupon("VALE10", 10, new Date("2025-01-22")));
//     const discount = order.getDiscount();
//     expect(discount).toBe(3);
// })
