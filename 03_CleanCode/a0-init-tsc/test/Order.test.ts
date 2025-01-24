import Cpf from '../src/ex_001_cpf/Cpf';
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

// test("deve criar um pedido com 3 itens", function () {
//     const order = new Order("839.435.452-10");
//     order.addItem(new Item(1, "Musica", "CD", 10), 3);
//     order.addItem(new Item(2, "Video", "DVD", 20), 2);
//     order.addItem(new Item(3, "Revista", "PDF", 7), 1);
//     expect(order.getTotal()).toBe(77);
// })

// test("deve criar um pedido com cupom válido (aplica o desconto)", function() {
//     const order = new Order("839.435.452-10");
//     order.addItem(new Item(4, "Musica", "CD", 10), 3);
//     order.addCoupon(new Coupon("VALE10", 10));
//     expect(order.getTotal()).toBe(27);
// })

// test("deve criar um pedido com cupon expiado (não aplica o desconto)", function() {
//     const order = new Order("839.435.452-10", new Date("2025-01-22"));
//     order.addItem(new Item(5, "Musica", "CD", 10), 3);
//     order.addCoupon(new Coupon("VALE10", 10, new Date("2024-01-25")));
//     expect(order.getTotal()).toBe(30);
// })

test("deve criar um pedido 3 itens e com frete incluso", function() {
    const order = new Order("839.435.452-10");
    order.addItem(new Item(6, "Guitarra", "Aparelho musical", 1000, 100, 30, 10, 3), 1); 
    order.addItem(new Item(7, "Caixa Amplificada", "Aparelho musical", 5000, 100, 50, 50, 20), 1);
    order.addItem(new Item(8, "Cabo P2", "Acessórios", 30, 10, 10, 10, 0.9), 3);
    const freight = order.getFreight();
    expect(freight).toBe(260);
})