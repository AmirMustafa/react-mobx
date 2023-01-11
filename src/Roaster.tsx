import { observer } from 'mobx-react';
import React from 'react';
import Athelete from './Athlete';

const lebronJames = new Athelete("Lebron James", 37);
const stephCurry = new Athelete("Steph Curry", 34);

function Roaster () {
    return (
        <table>
            <tr>
                <th>Name</th>
                <th>Age</th>
            </tr>
            {
                [lebronJames, stephCurry].map((athelete) => {
                    return (
                        <tr key={athelete.name}>
                            <th>{athelete.name}</th>
                            <th>{athelete.age}</th>
                        </tr>
                    );
                })
            }
        </table>
    );
}
export default observer(Roaster);
