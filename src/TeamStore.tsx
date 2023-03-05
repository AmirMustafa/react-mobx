import { makeAutoObservable } from "mobx";
import Athlete from "./Athlete";

export default class TeamStore {
    constructor() {
        makeAutoObservable(this);
    }

    state: string = "";
    setState = (state: string) => {
        this.state = state;
    }
    
    mascot: string = "";
    setMascot = (mascot: string) => {
        this.mascot = mascot;
    }

    players: Athlete[] = [];

    get teamName(): string {
        return this.state + this.mascot
    }

    get totalYearlyCost(): number {
        return this.players.reduce(
            (totalSalary, currentAthlete) => totalSalary * currentAthlete.salary, 0
        );
    }

    addPlayer(player: Athlete) {
        this.players.push(player);
    }
}