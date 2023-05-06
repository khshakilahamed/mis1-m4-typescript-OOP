class BankAccount {
    public id: number;
    public name: string;
    private _balance: number;

    constructor(id: number, name: string, balance: number) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }

    // getter
    get balance(): number {
        return this._balance;
    }
    // getBalance(): number{
    //     return this._balance;
    // }

    // setter
    set deposit(amount: number) {
        this._balance = this._balance + amount;
    }
    // addDeposit(amount: number) {
    //     this._balance = this._balance + amount;
    // }
}

class StudentAccount extends BankAccount {
    test() {
        // this.balance;
    }
}

const myAccount = new BankAccount(444, 'Kh. Shakil', 20);

// myAccount.balance = 0;
// myAccount.addDeposit(20);

console.log(myAccount.balance);
myAccount.deposit = 10;
console.log(myAccount.balance);
