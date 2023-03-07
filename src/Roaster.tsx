import { observer } from 'mobx-react';
import React from 'react';
import Athelete from './Athlete';
import { useTeamStore } from './teamStore';
import TradeForm from './TradePlayer'

function Roaster () {
    const { players } = useTeamStore();
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
                players.map((athlete) => {
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
