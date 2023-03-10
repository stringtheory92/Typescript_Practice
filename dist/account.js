"use strict";
class Account {
    constructor(id, owner, _balance, nickname) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
        this.nickname = nickname;
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Invalid amount");
        this._balance += amount;
    }
    calculateTax(bill) {
        return bill * 0.11;
    }
    get balance() {
        return this._balance;
    }
    pay(bill) {
        this._balance -= bill + this.calculateTax(bill);
        return this._balance;
    }
}
let account = new Account(1, "Adam", 0);
account.deposit(1000);
console.log(account.balance);
console.log("pay $100 + tax: ", account.pay(100));
//# sourceMappingURL=account.js.map