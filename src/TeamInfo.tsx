import { observer } from "mobx-react-lite";
import { useTeamStore } from "./teamStore";

function TeamNameInfo() {
    const {setMascot, teamName} = useTeamStore();
    return (
        <>
            <h1>Team: {teamName}</h1>
            <input
                type='text'
                placeholder="Change mascot" 
                onChange={e => setMascot(e.target.value)}
                style={{ marginBottom: 8 }}
            />{" "}
        </>
    );
}
export default observer(TeamNameInfo);