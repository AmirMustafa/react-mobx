import { action, observable } from 'mobx';
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
    const calculateTotal = action((formState: FormState) => {
        formState.total = formState.salary * formState.years;
        console.log('formState.total ===> ', formState.salary, formState.years, formState.total);
    })

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <h1 style={{ marginBottom: 0 }}>Money Talks</h1>
            <p>Total: { formState.total }</p>
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
            <button type="button" onClick={() => calculateTotal(formState)}>Calculate Total</button>
        </div>
    );
}
export default observer(MoneyForm);