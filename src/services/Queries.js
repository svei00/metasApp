// Get all goals
export async function getGoals() {
    const response = await fetch('api/goals');
    // const response = await fetch('/goals.json');                     // Was. We use this to simulate the web api
    const goals = await response.json();
    return goals;
}

// Get one goal by id
export async function getGoal(id) {
    const response = await fetch(`api/goals${id}`);
    const goal = await response.json();
    return goal;
}

// Create a Goal
/* Was. We use this to simulate the web api
export async function createGoal() {
    const response = await fetch('/goal.json') 
    const goalCreated = await response.json();
        console.log('Goal has been created!', goalCreated)
        return goalCreated;
    };
*/

export async function createGoal(goal) {
    const response = await fetch('/api/goals', {
        method: 'POST',
        body: JSON.stringify(goal),
        headers: {
            'content-type': 'application/json; charset=UTF-8'
        }
    });
    const goalCreated = await response.json();
    console.log('Goal has been created!', goalCreated)
    return goalCreated;
}

// Update Goal
/* Was. We use this to simulate the web api
export async function updateGoal() {
    const response = await fetch('/goal.json'); 
    const goalUpdated = await response.json();
    console.log('Goal has been updated!', goalUpdated)
    return goalUpdated;
}
*/

export async function updateGoal(goal) {
    const response = await fetch(`/api/goals/${goal.id}`, {
        method: 'PUT',
        body: JSON.stringify(goal),
        headers: {
            'content-type': 'application/json; charset=UTF-8'
        }
    });
    const goalUpdated = await response.json();
    console.log('Goal has been updated!!', goalUpdated)
    return goalUpdated;
}


// Delete Goal
/* Was. We use this to simulate the web api
export async function delGoal() {
    const response = await fetch('/goal.json');
    const goalDeleted = await response.json(); 
    console.log('Goal has been deleted!', goalDeleted.id)
    return goalDeleted.id;
*/

export async function delGoal(id) {
    await fetch(`/api/goals${id}`, {
        method: 'DELETE'
    });
    console.log('Goal has been Deleted!!', id)
}
