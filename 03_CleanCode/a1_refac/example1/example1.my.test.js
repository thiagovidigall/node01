const example1 = require("./exemple1_after_my");

test("Deve calcular o valor de um corrida de taxi em dias normais", function () {
  // given (dado que) | Arrange
  const distance = 1000;
  const date = new Date("2024-12-03T08:00:00");  //padrão date ISO 8001

  // when (quando algo acontecer ...) | Action
  const  price = example1.calculateRide(distance, date);

    // then (então algo deve ser verificado) | Assert
    expect(price).toBe(2100);

});

test("Deve calcular o valor da um corrida de taxi nos domingos", function () {
  const distance = 1000;
  const date = new Date("2024-12-15T09:00:00");
  const price = example1.calculateRide(distance, date);
  expect(price).toBe(2900);
});

test("Deve calcular o valor da um corrida de taxi de noite", function () {
  const distance = 1000;
  const date = new Date("2024-12-03T23:00:00");
  const price = example1.calculateRide(distance, date);
  expect(price).toBe(3900);
});

test("Deve lançar uma exception se a distância for inválida", function () {
  const distance = "1000";
  const date = new Date("2024-12-03T23:00:00");
  expect(() => example1.calculateRide(distance, date)).toThrow(new Error("Invalid parameter distance"));
});

test("Deve lançar uma exception se a distância for negativa", function () {
  const distance = -1000;
  const date = new Date("2024-12-03T23:00:00");
  expect(() => example1.calculateRide(distance, date)).toThrow(new Error("Invalid parameter distance"));
});

test("Deve lançar uma exception se a data for inválida", function () {
  const distance = 1000;
  const date = "2024-12-03T23:00:00";
  expect(() => example1.calculateRide(distance, date)).toThrow(new Error("Invalid parameter date"));  
});

test("Deve ser de noite", function () {
  const date = new Date("2024-12-03T23:00:00");
  const isOverNight = example1.isOverNight(date);
  expect(isOverNight).toBeTruthy();  
});

test("Deve ser de domingo", function () {
  const date = new Date("2024-12-15T23:00:00");
  const isSunday = example1.isSunday(date);
  expect(isSunday).toBeTruthy();  
});

test("Deve lançar uma exception se a data for inválida", function () {
  const distance = 1000;
  const date = "2024-12-03T23:00:00";
  expect(() => example1.calculateRide(distance, date)).toThrow(new Error("Invalid parameter date"));  
});