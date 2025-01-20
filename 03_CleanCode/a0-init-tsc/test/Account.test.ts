import sinon from 'sinon';

import Account from '../src/ex_002_account/Account';
import CurrencyAPI from '../src/ex_002_account/CurrencyAPI';
import CurrencyAPIFake from '../src/ex_002_account/CurrencyAPIFake';

let account: Account;
let currencyAPI: CurrencyAPI;

beforeEach(function () {
  currencyAPI = new CurrencyAPIFake();
  account = new Account(currencyAPI);
});

test("Deve criar uma conta com saldo zero", function () {
  const balance = account.getBalance();
  expect(balance).toBe(0);
});

test("Deve fazer um crédito de R$100", function () {
  const credit = account.credit(100);
  const balance = account.getBalance();
  expect(balance).toBe(100);
});

test("Deve fazer um crédito de $100 com fake", function () {
  const credit = account.credit(100, "USD");
  const balance = account.getBalance();
  expect(balance).toBe(600);
});

test("Deve fazer um crédito de $600 com stub", function () {
  sinon.stub(currencyAPI, "convert").returns(600);
  const credit = account.credit(100, "USD");
  const balance = account.getBalance();
  expect(balance).toBe(600);
});

test("Deve criar uma conta com spy", function () {
  const spy = sinon.spy(account, "getBalance");
  account.getBalance();
  account.getBalance();
  sinon.assert.calledTwice(spy);
});

test("Deve fazer um crédito de $100 com mock", function () {
  const mock = sinon.mock(account);
  mock.expects("credit").once().withArgs(100, "USD");
  mock.expects("getBalance").once().returns(600);
  const credit = account.credit(100, "USD");
  const balance = account.getBalance();
  expect(balance).toBe(600);
  mock.verify();
});

test("Deve fazer um debito de 50", function () {
  const credit = account.credit(100);
  const debit = account.debit(50);
  const balance = account.getBalance();
  expect(balance).toBe(50);
});
