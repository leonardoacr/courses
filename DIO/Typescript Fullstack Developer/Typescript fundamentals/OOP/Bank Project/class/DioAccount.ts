export abstract class DioAccount {
    private readonly name: string;
    private readonly accountNumber: number;
    private status: boolean = true;
    private balance: number = 0;

    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
    }

    getName(): string {
        return this.name;
    }

    getAccountNumber = (): number => {
        return this.accountNumber;
    }

    getStatus = (): void => {
        this.status ? console.log(`Account status: Active.`) : console.log(`Account status: Inactive`);
    }

    protected deposit = (amount: number): void => {
        if (this.validateStatus() && this.validateAmount(amount)) {
            this.balance += amount;
            console.log(`You deposited $${amount}.`);
        } else if (!this.validateAmount(amount)) {
            console.log(`Invalid transaction: Negative amount.`)
        } else {
            console.log(`Transaction failed: Inactive account.`)
        }
    }

    protected withDraw = (amount: number): void => {
        if (this.validateStatus() && this.validateWithdraw(amount)) {
            this.balance -= amount;
            console.log(`You withdrew $${amount}.`);

        } else if (!this.validateAmount(amount)) {
            console.log('Invalid transaction: You can\' withdraw negative amount.');
        } else {
            console.log(`Invalid transaction: You don't have enough money.`)
        }
    }

    setBalance = (amount: number, transactionType: string): void => {
        switch (transactionType) {
            case 'deposit':
                this.deposit(amount);
                break;
            case 'withdraw':
                this.withDraw(amount);
                break;
        }
    }

    getBalance = (): void => {
        console.log(`You have $${this.balance} on this account.`);
    }

    protected validateStatus = (): boolean => {
        if (this.status) {
            return this.status;
        }

        throw new Error('Invalid account.');
    }

    protected validateWithdraw = (amount: number): boolean => {
        return ((this.balance - amount) >= 0) && this.validateAmount(amount);
    }

    protected validateAmount = (amount: number): boolean => {
        return amount > 0;
    }
}