import { useContext /* useEffect */ } from "react"; // Was2 useEffect
import Goal from "./Goals";
import { Outlet } from "react-router";
import { GoalsContext } from "../../../memory/GoalsMemory.js";
// import { getGoals } from '../../../services/Queries';            // Was2

/* Was 1:
const listMock = {
    "id": "1",
    "details": "Run for 30 minutes",
    "frequency": "Daily",
    "events": 1,
    "icon": "🏃",
    "goal": 365,
    "term": "2022-12-31",
    "complete": 10
}; 
*/

/* Was 2:
const listMock = [
    {
        "id": "1",
        "details": "Run for 30 minutes",
        "frequency": "daily",
        "events": 1,
        "icon": "🏃",
        "goal": 365,
        "term": "2022-12-31",
        "complete": 10
    },

    {
        "id": "2",
        "details": "Read Books",
        "frequency": "Yearly",
        "events": 6,
        "icon": "📚",
        "goal": 12,
        "term": "2022-12-31",
        "complete": 2
    },

    {
        "id": "3",
        "details": "Travel to National Parks",
        "frequency": "Montly",
        "events": 1,
        "icon": "🏞️",
        "goal": 60,
        "term": "2024-12-31",
        "complete": 40
}]; 
*/

function List() {
  const [state] = useContext(GoalsContext); // Was1: const goals = useContext(Context); Was2: const [state, dispatch] = useContext(Context);

  /* Was1:  moved to App.js
    useEffect(() => {
        (async () => {
            const goals = await getGoals();
            dispatch({ type: 'set', goals });        
        })();
    },[]);
    */

  console.log(state.id); // To check if it works
  return (
    <>
      {/* Was: Goal {...listMock}></Goal>  // Was this is called spread */}
      {state.order.map((id) => (
        <Goal key={id} {...state.objects[id]}></Goal>
      ))}{" "}
      {/*Was: 1. listMock.map(goal => <Goal key={goal.id} {...goal}></Goal>) 2. goals.map(goal => <Goal key={goal.id} {...goal}></Goal>)*/}
      <Outlet />
    </>
  );
}

export default List;
