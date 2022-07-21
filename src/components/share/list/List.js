import { useContext } from 'react';
import Goal from './Goals';
import { Context } from '../../../services/Memory.js';

/* Was 1:
const listMock = {
    "id": "1",
    "details": "Run for 30 minutes",
    "frequency": "daily",
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

    const goals = useContext(Context);
    console.log(goals);                             // To check if it works
    return (
        /* Was: Goal {...listMock}></Goal>  // Was this is called spread */ 
        goals.map(goal => <Goal key={goal.id} {...goal}></Goal>)         //Was: listMock.map(goal => <Goal key={goal.id} {...goal}></Goal>)
      );
}

export default List;