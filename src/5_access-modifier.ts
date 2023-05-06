// class BankAccount {
//     public id: number;
//     public name: string;
//     protected balance: number;

//     constructor(id: number, name: string, balance: number) {
//         this.id = id;
//         this.name = name;
//         this.balance = balance;
//     }

//     getBalance(){
//         console.log(`My Current Balance is ${this.balance}`);
//     }

//     addDeposit(amount: number){
//         this.balance = this.balance + amount;
//     }
// }

// class StudentAccount extends BankAccount{
//     test(){
//         this.balance;
//     }
// }

// const myAccount = new BankAccount(444, 'Kh. Shakil', 20);

// // myAccount.balance = 0;
// myAccount.addDeposit(20);
// myAccount.getBalance();
// console.log(myAccount)