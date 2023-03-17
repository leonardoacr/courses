import { DioAccount } from "./DioAccount";

export class PeopleAccount extends DioAccount {
    constructor(docID: number, name: string, accountNumber: number) {
        super(name, accountNumber)
        this.docID = docID;
    }

    docID: number;
}