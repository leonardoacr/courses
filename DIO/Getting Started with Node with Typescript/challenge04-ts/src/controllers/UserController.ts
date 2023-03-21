import { Request, Response } from 'express'
import { UserService } from '../services/UserService'
import validator from 'validator'

export class UserController {
    userService: UserService

    constructor(
        userService = new UserService()
    ) {
        this.userService = userService
    }

    createUser = (request: Request, response: Response): Response => {
        const user = request.body

        const badRequestMessage = (message: string) => {
            return response.status(400).json({ message: `Bad request! ${message}` })
        }

        if (!user.name) {
            return badRequestMessage('Name field empty')
        }

        // Validating email
        if (!user.email) {
            return badRequestMessage('Email field empty')
        }

        const isEmailValid = validator.isEmail(user.email)
        const message = isEmailValid ? 'User created' : 'Invalid email'

        if (!isEmailValid) {
            return badRequestMessage(message)
        }


        this.userService.createUser(user.name, user.email)
        return response.status(201).json({ message: 'Usuário criado' })
    }

    getAllUsers = (request: Request, response: Response) => {
        const users = this.userService.getAllUsers()
        return response.status(200).json(users)
    }
}