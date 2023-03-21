export interface User {
    name: string
    email: string
}

const db = [
    {
        name: "Joana",
        email: "joana@dio.com",
    }
]

export class UserService {
    db: User[]

    constructor(
        database = db
    ) {
        this.db = database
    }

    createUser = (name: string, email: string) => {
        const user: User = {
            name,
            email
        }

        this.db.push(user)
        console.log('DB updated', this.db)
    }

    getAllUsers = () => {
        return this.db
    }

    deleteUser = (name: string, email: string) => {
        const user: User = {
            name,
            email
        }

        const nameToRemove = user.name;
        const emailToRemove = user.email;

        this.db = this.db.filter(user => user.name !== nameToRemove && user.email !== emailToRemove);

        console.log('User deleted', this.db)
    }
}
