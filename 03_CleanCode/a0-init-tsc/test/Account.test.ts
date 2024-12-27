import Account from "../src/Account";

test("Deve criar uma conta com saldo zero", function () {
    const acc = new Account();
    const balance = acc.getBalance();
    expect(balance).toBe(0);
})