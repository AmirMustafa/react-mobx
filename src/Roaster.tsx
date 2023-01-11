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
                <th>Is it Birthday ?</th>
            </tr>
            {
                [lebronJames, stephCurry].map((athelete) => {
                    return (
                        <tr key={athelete.name}>
                            <td>{athelete.name}</td>
                            <td>{athelete.age}</td>
                            <td>
                                <button
                                    type="button"
                                    style={{ width: "100%" }}
                                    onClick={ () => athelete.wishHappyBirthday() }
                                >Wish Happy Birthday 🍰🎊</button>
                            </td>
                        </tr>
                    );
                })
            }
        </table>
    );
}
export default observer(Roaster);
