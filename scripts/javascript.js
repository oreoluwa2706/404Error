class Account {
  irstNa;
  constructor(firstName, lastName, balance, age, gender) {
    this.firstName = firstName || "Saheed";
    this.lastName = lastName || "Bilal";
    this.age = age;
    this.balance = balance;
    this.gender = gender;
  }

  setFirstName(firstName) {
    this.firstName = firstName;
  }

  getFirstName(lastName) {
    return this.firstName;
  }
}

export default { Account };

//class BankAccount extends Account{
//constructor(firstName, lastName, balance, age, gender, balance, accountNumber){
// super(firstName, lastName, lastName, age, gender)
//this.balance = balance;
//this.accountNumber = accountNumber;

//}
//getBalance(){
//  return this.balance;
//}
//setBalance(balance){
//  this.balance = balance;
//}

//}
