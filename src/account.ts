class Account {
  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number,
    public nickname?: string
  ) {
    this.id = id;
    this.owner = owner;
    this._balance = _balance;
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");

    this._balance += amount;
  }

  private calculateTax(bill: number) {
    return bill * 0.11;
  }

  get balance(): number {
    return this._balance;
  }

  pay(bill: number): number {
    this._balance -= bill + this.calculateTax(bill);
    return this._balance;
  }
}

let account = new Account(1, "Adam", 0);
account.deposit(1000);
console.log(account.balance);
console.log("pay $100 + tax: ", account.pay(100));
