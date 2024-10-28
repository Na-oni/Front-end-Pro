/* 1) Створіть клас BankAccount, який буде представляти банківський рахунок.
 * 2) Додайте властивість балансу та методи для внесення та зняття грошей. */

class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }

    get_balance = () => this.balance;
    deposit = (deposit) => { this.balance += deposit };
    withdraw = (withdraw) => { this.balance -= withdraw };
}

const account1 = new BankAccount(1000);

console.log(account1.get_balance()); // 1000
account1.deposit(500);
console.log(account1.get_balance()); // 1500
account1.withdraw(200);
console.log(account1.get_balance()); // 1300