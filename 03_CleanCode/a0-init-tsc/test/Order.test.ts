import Order from '../src/ex_003_order/Order';

test("deve criar um pedido informando o cpf", function () {
    const cpf = "839.435.452-10";
    const order = new Order(cpf);
    expect(order).toBeTruthy();
});
