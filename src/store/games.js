import axios from "axios"
import { makeAutoObservable } from "mobx"

class Games {
    games = []
    constructor() {
        makeAutoObservable(this)
    }

    removeGame(slug) {
        this.games = this.games.filter(game => game.slug !== slug)
    }

    fetchGames() {
        fetch('http://127.0.0.1:8000/api/v1/games')
            .then(response => response.json())
            .then(json => {
                this.games = [...this.games, ...json.content]
                // console.log(json.content)
            })
    }

    getGames() { 
        axios.get('http://127.0.0.1:8000/api/v1/games')
            .then(response => this.games = [...this.games, ...response.data.content])
            .catch(error => {
                console.log("error", error);
            })
    }
}

export default new Games()