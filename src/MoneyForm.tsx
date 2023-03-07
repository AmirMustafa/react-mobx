import { action, computed, observable, toJS } from 'mobx';
import { observer } from 'mobx-react';
import Athlete from './Athlete';
import { useTeamStore } from './teamStore';

type FormState = {
    name: string;
    age: number;
    salary: number;
};

const initialState: FormState = {
    name: "",
    age: 0,
    salary: 0,
}

let formState: FormState = observable({
    name: "",
    age: 0,
    salary: 0,
});

const MoneyForm = () => {
    const {totalYearlyCost, addPlayer} = useTeamStore();
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <h1 style={{ marginBottom: 0 }}>Money Talks</h1>
            <>Total: {totalYearlyCost} Million</>
            <input 
                type='string'  
                placeholder="Player Name.."
                style={{ height: '40px' }}
                value={formState.name}
                onChange={action((e) => {
                    formState.name = e.target.value
                } )}
            />
            <input 
                type='number'  
                placeholder="Player Age..."
                style={{ height: '40px' }}
                value={formState.age}
                onChange={action((e) => {
                    formState.age = +e.target.value
                } )}
            />
            <input 
                type='number'  
                placeholder="Yearly Salary..."
                style={{ height: '40px' }}
                value={formState.salary}
                onChange={action((e) => {
                    formState.salary = +e.target.value
                } )}
            />

            <button
                type="button"
                onClick={action(() => {
                    addPlayer(
                        new Athlete(formState.name, formState.age, formState.salary)
                    );
                    formState = initialState;
                })}
            >Add Player</button>
        </div>
    );
}
export default observer(MoneyForm);