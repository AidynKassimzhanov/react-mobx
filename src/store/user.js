import axios from "axios"
import { makeAutoObservable } from "mobx"
import $api from "../http"
import AuthService from "../services/AuthService"

class User {
    user = {}
    isLogin = false
    constructor() {
        makeAutoObservable(this)
    }

    setIsLogin(isLogin) {
        this.isLogin = isLogin
    }

    setUser(user) {
        this.user = user
    }

    // const api = axios.create({
    //     baseURL: 'https://api.example.com/'
    // });

    login(username, password) {
        axios.post('http://127.0.0.1:8000/api/v1/auth/signin', {
            username: username,
            password: password
        })
            .then(response => {
                localStorage.setItem('token', response.data.token)
                this.isLogin = true
            })
            .catch(error => {
                console.log("register_ERROR", error);
            })
    }

    register(username, password) {
        axios.post('http://127.0.0.1:8000/api/v1/auth/signup', {
            username: username,
            password: password
        })
            .then(response => {
                localStorage.setItem('token', response.data.token)
                this.isLogin = true
            })
            .catch(error => {
                console.log("login_ERROR", error);
            })
    }

    async logout() {
        $api.post('auth/signout')
            .then(response => {
                localStorage.removeItem('token')
                this.isLogin = false
            })
            .catch(error => {
                console.log("error", error);
            })
    }

    async checkOut() {
        
    }
}

export default new User()