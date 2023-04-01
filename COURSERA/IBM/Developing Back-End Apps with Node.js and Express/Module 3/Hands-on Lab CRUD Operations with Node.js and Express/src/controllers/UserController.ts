import { Request, Response } from "express";
import UserModel from "../models/UserModel";

class UserController {
    userModel: UserModel;

    constructor() {
        this.userModel = new UserModel();
        this.getUsers = this.getUsers.bind(this);
        this.getUser = this.getUser.bind(this);
        this.createUser = this.createUser.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    getUsers = (req: Request, res: Response) => {
        const users = this.userModel.getUsers();
        res.send(users);
    }

    getUser(req: Request, res: Response) {
        const email = req.params.email;
        const filtered_users = this.userModel.getUsers().filter((user) => user.email === email);
        res.send(filtered_users);
    }

    createUser(req: Request, res: Response) {
        const firstName = req.query.firstName as string;
        const lastName = req.query.lastName as string;
        const email = req.query.email as string;
        const DOB = req.query.DOB as string;
        this.userModel.createUser({ firstName, lastName, email, DOB });
        res.send(`The user ${firstName} has been added!`);
    }

    updateUser(req: Request, res: Response) {
        const email = req.params.email;
        const userModel = new UserModel();
        const filtered_users = userModel.getUsers().filter((user) => user.email === email);
        if (filtered_users.length > 0) {
            const filtered_user = filtered_users[0];
            const DOB = req.query.DOB as string;
            //if the DOB has changed
            if (DOB) {
                filtered_user.DOB = DOB;
            }
            const firstName = req.query.firstName as string;
            //if the first name has changed
            if (firstName) {
                filtered_user.firstName = firstName;
            }
            const lastName = req.query.lastName as string;
            //if the last name has changed
            if (lastName) {
                filtered_user.lastName = lastName;
            }
            const email = req.query.email as string;
            //if the phone number has changed
            if (email) {
                filtered_user.email = email;
            }
            userModel.updateUser(email, filtered_user);
            res.send(`User with the email ${email} updated.`);
        } else {
            res.send("Unable to find user!");
        }
    }

    deleteUser(req: Request, res: Response) {
        const email = req.params.email;
        const userModel = this.userModel;
        userModel.deleteUser(email);
        res.send(`User with the email ${email} deleted.`);
    }
}

export default UserController;
