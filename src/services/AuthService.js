import $api from "../http";

export default class AuthService {
    static async login(username, password) {
        return $api.post('/auth/signin', { username, password})
    }

    static async register(username, password) {
        return $api.post('/auth/signup', { username, password})
    }

    static async logout() {
        return $api.post('/auth/signout')
    }
}