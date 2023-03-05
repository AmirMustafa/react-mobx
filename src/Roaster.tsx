import { observer } from 'mobx-react';
import React from 'react';
import Athelete from './Athlete';
import TradeForm from './TradePlayer'

const lebronJames = new Athelete("Lebron James", 37);
const stephCurry = new Athelete("Steph Curry", 34);

function Roaster () {
    return (
        <table>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Team</th>
                <th>Trade Form</th>
                <th>Is it Birthday ?</th>
            </tr>
            {
                [lebronJames, stephCurry].map((athlete) => {
                    return (
                        <tr key={athlete.name}>
                            <td>{athlete.name}</td>
                            <td>{athlete.age}</td>
                            <td>{athlete.teamHistory}</td>
                            <td>
                               <TradeForm athlete={athlete} />
                            </td>
                            <td>
                                <button
                                    type="button"
                                    style={{ width: "100%" }}
                                    onClick={ () => athlete.wishHappyBirthday() }
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
