import { Injectable } from "@angular/core"
import { User } from "../models/user.model"
import { BehaviorSubject } from "rxjs"

@Injectable({ providedIn: 'root' })
export class UserService {

    private _loggedInUser$ = new BehaviorSubject<User>({
        name: "Satoshi Nakamoto",
        coins: 100,
        moves: []
    })

    public loggedInUser$ = this._loggedInUser$.asObservable()

    constructor() {
        this.loadUser()
    }

    getUser(): User {
        return this._loggedInUser$.value
    }

    signup(name: string) {
        const newUser: User = {
            name: name,
            coins: 100,
            moves: []
        }
        this._loggedInUser$.next(newUser)
        this.saveUser(newUser)
    }

    private saveUser(user: User) {
        // You can save the user to local storage here if needed
        // For simplicity, let's assume local storage usage for now
        localStorage.setItem('loggedInUser', JSON.stringify(user))
    }

    private loadUser() {
        const userData = localStorage.getItem('loggedInUser')
        if (userData) {
            const user: User = JSON.parse(userData)
            this._loggedInUser$.next(user)
        }
    }
}