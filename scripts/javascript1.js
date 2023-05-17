class BankAccount extends Account{
    constructor(firstName, lastName, balance, age, gender, balance, accountNumber){
       super(firstName, lastName, lastName, age, gender)
        this.balance = balance;
        this.accountNumber = accountNumber;



    }
    getBalance(){
        return this.balance;
    }
setBalance(balance){
    this.balance = balance;
}
   
}

let acct = new BankAccount();
console.log(acct.setBalance());
console.log(acct.)