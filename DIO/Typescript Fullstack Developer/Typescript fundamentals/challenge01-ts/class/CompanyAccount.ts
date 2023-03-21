import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    getLoan(loan: number): void {
        if (this.validateStatus() && this.validateAmount(loan)) {
            this.deposit(loan);
            console.log(`The company ${this.getName()} took out a loan of $${loan}.`)
        } else if (!this.validateAmount(loan)) {
            console.log(`Invalid transaction: Negative amount.`)
        } else {
            console.log(`The company ${this.getName()} failed to take out a loan: Inactive account.`)
        }

    }
}