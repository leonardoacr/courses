import { DioAccount } from "./DioAccount";

export class FreeMoney extends DioAccount {
    freeMoney: number = 10;

    depositWithFreeMoney = (amount: number): void => {
        if (this.validateAmount(amount)) {
            console.log(`You have earned $${this.freeMoney}.`);
            const newAmount = amount + this.freeMoney;
            this.setBalance(newAmount, 'deposit');
        } else {
            console.log(`You can't deposit a negative amount.`);
        }
    }
}
