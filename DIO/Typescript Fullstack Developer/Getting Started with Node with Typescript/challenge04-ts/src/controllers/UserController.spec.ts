import { UserController } from "./UserController";
import { UserService } from '../services/UserService'
import { Request } from 'express'
import { makeMockResponse } from "../__mocks__/mockResponse.mock";

describe('UserController', () => {
    const mockUserService: Partial<UserService> = {
        createUser: jest.fn()
    }

    const userController = new UserController(mockUserService as UserService);

    it('Should add new user', () => {
        const mockRequest = {
            body: {
                name: 'Nath',
                email: 'nath@test.com'
            }
        } as Request
        const mockResponse = makeMockResponse()
        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(201)
        expect(mockResponse.state.json).toMatchObject({ message: 'User created' })
    })

    it('Should receive a message for empty name', () => {
        const mockRequest = {
            body: {
                name: undefined,
                email: 'nath@test.com'
            }
        } as Request
        const mockResponse = makeMockResponse()
        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(400)
        expect(mockResponse.state.json).toMatchObject({ message: 'Bad request! Name field empty' })
    })

    it('Should receive a message for empty email', () => {
        const mockRequest = {
            body: {
                name: 'Nath',
                email: undefined
            }
        } as Request
        const mockResponse = makeMockResponse()
        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(400)
        expect(mockResponse.state.json).toMatchObject({ message: 'Bad request! Email field empty' })
    })

    it('Should receive a message for invalid email', () => {
        const mockRequest = {
            body: {
                name: 'Nath',
                email: 'nathtest.com'
            }
        } as Request
        const mockResponse = makeMockResponse()
        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(400)
        expect(mockResponse.state.json).toMatchObject({ message: 'Bad request! Invalid email' })
    })

    it('Should delete existing user', () => {
        // Create mock user in database
        const user = { name: 'Nath', email: 'nath@test.com' }
        const userService = new UserService([user])
        const userController = new UserController(userService)

        // Create mock request and response
        const mockRequest = { body: user } as Request
        const mockResponse = makeMockResponse()

        // Call deleteUser function
        userController.deleteUser(mockRequest, mockResponse)

        // Check response status and message
        expect(mockResponse.state.status).toBe(200)
        expect(mockResponse.state.json).toMatchObject({ message: 'User deleted' })

        // Check that the user was actually deleted from the database
        const usersOnDB = userService.getAllUsers()
        expect(usersOnDB.length).toBe(0)
    })

    it('Should return error if user does not exist', () => {
        // Create mock user in database
        const user = { name: 'Nath', email: 'nath@test.com' }
        const userService = new UserService([])
        const userController = new UserController(userService)

        // Create mock request and response
        const mockRequest = { body: user } as Request
        const mockResponse = makeMockResponse()

        // Call deleteUser function
        userController.deleteUser(mockRequest, mockResponse)

        // Check response status and message
        expect(mockResponse.state.status).toBe(400)
        expect(mockResponse.state.json).toMatchObject({
            message:
                'Bad request! User does not exist in the database'
        })
    })
})