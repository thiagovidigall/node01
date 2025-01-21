import OrderItem from '../src/ex_003_order/OrderItem';

test("Deve criar um item do pedido", function() {
  // const order = new Order("839.435.452-10");
  // const item = order.addItem(new Item(3, "Cebola", "Legumes", 8.5), 10);
  const orderItem = new OrderItem(3, 8.5, 10);
  expect(orderItem.getTotal()).toBe(85);
})