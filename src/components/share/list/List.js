import Goal from './Goals'

/* Was:
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

function List() {
    return (
        /* Was: Goal {...listMock}></Goal>  // Was this is called spread */ 
        listMock.map(goal => <Goal {...goal}></Goal>)
      );
}

export default List;