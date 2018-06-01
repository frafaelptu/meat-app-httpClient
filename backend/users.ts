export class User {

    constructor(public email: string,
                public name: string,
                public password: string){}

    matches(another: User): boolean{        
        return another !== undefined && 
            (another.email === this.email && another.password === this.password)
    }
}

export const users: {[key: string]: User} = {
    "chico@gmail.com": new User('chico@gmail.com','Francisco Rafael Gomes', 'chico35'),
    "juliana@gmail.com": new User('juliana@gmail.com','Juliana Silva', 'juliana23'),
    "amanda@gmail.com": new User('amanda@gmail.com','Amanda', 'amanda21')
}