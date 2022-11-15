import { IUser } from "../model/user";
import instance from "./instance";

export const signup = (user: IUser) => {
    return instance.post("/signup", user)
}
export const signin = (user: IUser) => {
    return instance.post("/signin", user)
}