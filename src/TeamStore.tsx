import { makeAutoObservable } from "mobx";

export default class TeamStore {
    constructor() {
        makeAutoObservable(this);
    }

    state: string = "";
    setState = (state: string) => {
        this.state = state;
    }

}