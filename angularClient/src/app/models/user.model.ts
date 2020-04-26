// Object models in TypeScript are Interfaces
export interface UserModel {
    firstName: String,
    lastName: String,
    email: String,
    cgu: Boolean,
    password: String,
    repeatePassword?: String,
    _id?: String,
}
