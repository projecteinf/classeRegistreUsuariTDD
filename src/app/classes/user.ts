export class User {
    username!:string;
    email!:string;
    language!:string;
    password!:string;

    isValid(repeatPassword:string):boolean {
        return this.email !== undefined && this.email!=="" && this.password===repeatPassword;
    }
}