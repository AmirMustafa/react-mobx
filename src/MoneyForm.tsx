import { action, computed, observable, toJS } from 'mobx';
import { observer } from 'mobx-react';

type FormState = {
    total: number;
    years: number;
    salary: number;
};

const formState: FormState = observable({
    total: 0,
    years: 0,
    salary: 0,
});

const MoneyForm = () => {
    const totalValue = computed(() => formState.salary * formState.years);

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <h1 style={{ marginBottom: 0 }}>Money Talks</h1>
            <>Total: { toJS(totalValue) }</>
            <input 
                type='number'  
                placeholder="Years..."
                style={{ height: '40px' }}
                onChange={action((e) => {
                    formState.years = +e.target.value
                } )}
            />
            <input 
                type='number'  
                placeholder="Yearly Salary..."
                style={{ height: '40px' }}
                onChange={action((e) => {
                    formState.salary = +e.target.value
                } )}
            />
        </div>
    );
}
export default observer(MoneyForm);