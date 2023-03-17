import { PeopleAccount } from "./class/PeopleAccount";
import { CompanyAccount } from "./class/CompanyAccount";
import { FreeMoney } from "./class/FreeMoney";

const johnAccount = new PeopleAccount(186744234, 'John', 28356)
console.log('John transactions:')
johnAccount.setBalance(10, 'deposit');
johnAccount.setBalance(-10, 'withdraw');
johnAccount.setBalance(10, 'withdraw');
johnAccount.setBalance(10, 'withdraw');
johnAccount.getAccountNumber();
johnAccount.getStatus();
johnAccount.getBalance();

console.log(`\n`);
const DIOAccount = new CompanyAccount('DIO', 10298)
console.log('DIO transactions:')
DIOAccount.setBalance(10, 'deposit');
DIOAccount.getLoan(-500);
DIOAccount.getLoan(500);
DIOAccount.getAccountNumber();
DIOAccount.getStatus();
DIOAccount.getBalance();

console.log(`\n`);
const freeMoneyAccount = new FreeMoney('John', 28356);
console.log('Free Money Account transactions:')
freeMoneyAccount.depositWithFreeMoney(10);
freeMoneyAccount.getBalance();
freeMoneyAccount.setBalance(10, 'withdraw');
freeMoneyAccount.getAccountNumber();
freeMoneyAccount.getStatus();
freeMoneyAccount.getBalance();