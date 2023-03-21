import { Request, Response } from 'express'
import { User, UserService } from '../services/UserService'
import validator from 'validator'

export class UserController {
    userService: UserService

    constructor(
        userService = new UserService()
    ) {
        this.userService = userService
    }

    badRequestMessage = (message: string, response: Response) => {
        return response.status(400).json({ message: `Bad request! ${message}` })
    }

    isFields = (user: User, response: Response): Response | undefined => {
        if (!user.name) {
            return this.badRequestMessage('Name field empty', response)
        }

        // Validating email
        if (!user.email) {
            return this.badRequestMessage('Email field empty', response)
        }

        return undefined;
    }

    createUser = (request: Request, response: Response): Response => {
        const user = request.body

        const isFieldsEmpty: Response | undefined = this.isFields(user, response)

        if (isFieldsEmpty) { return isFieldsEmpty }

        const isEmailValid = validator.isEmail(user.email)
        const message = isEmailValid ? 'User created' : 'Invalid email'

        if (!isEmailValid) {
            return this.badRequestMessage(message, response)
        }


        this.userService.createUser(user.name, user.email)
        return response.status(201).json({ message: 'User created' })
    }

    getAllUsers = (request: Request, response: Response) => {
        const users = this.userService.getAllUsers()
        return response.status(200).json(users)
    }

    deleteUser = (request: Request, response: Response) => {
        const user = request.body

        const isFieldsEmpty: Response | undefined = this.isFields(user, response)

        if (isFieldsEmpty) { return isFieldsEmpty }

        const usersOnDB = this.userService.getAllUsers()
        const isUserOnDB = usersOnDB.find(u => u.name === user.name && u.email === user.email)

        if (isUserOnDB) {
            // user exists in the db
            this.userService.deleteUser(user.name, user.email)
        } else {
            // user does not exist in the db
            return this.badRequestMessage('User does not exist in the database', response)
        }

        return response.status(200).json({ message: 'User deleted' })
    }
}