import { User } from "../interfaces/IUser";

class UserModel {
    private users: User[];

    constructor() {
        this.users = [
            {
                firstName: "John",
                lastName: "wick",
                email: "johnwick@gamil.com",
                DOB: "22-01-1990",
            },
            {
                firstName: "John",
                lastName: "smith",
                email: "johnsmith@gamil.com",
                DOB: "21-07-1983",
            },
            {
                firstName: "Joyal",
                lastName: "white",
                email: "joyalwhite@gamil.com",
                DOB: "21-03-1989",
            },
        ];
    }

    getUsers(): User[] {
        return this.users;
    }

    createUser(user: User): void {
        this.users.push(user);
    }

    deleteUser(email: string): void {
        this.users = this.users.filter((user) => user.email !== email);
    }

    updateUser(email: string, updatedUser: User): void {
        this.users = this.users.map((user) =>
            user.email === email ? updatedUser : user
        );
    }

    getUserByEmail(email: string): User | undefined {
        return this.users.find((user) => user.email === email);
    }
}

export default UserModel;
