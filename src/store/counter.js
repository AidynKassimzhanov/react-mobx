import { makeAutoObservable } from "mobx"

class Counter {
    count = 5
    constructor() {
        makeAutoObservable(this)
    }

    increment() {
        this.count = this.count + 1
        console.log(this.count)
    }
    decrement() {
        this.count = this.count - 1
        console.log(this.count)
    }    
}

export default new Counter()