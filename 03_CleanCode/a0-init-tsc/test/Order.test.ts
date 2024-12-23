import Order from "../src/Order";

test("deve criar um pedido informando o cpf", function () {
    const order = new Order('89145160163');
    expect(order).toBeTruthy();
});