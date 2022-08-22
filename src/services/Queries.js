// Get all goals
export async function getGoals() {
    const response = await fetch('api/goals');
    const goals = await response.json();
    return goals;
}

// Get one goal by id
/*export async function getGoals(id) {
    const response = await fetch(`api/goals${id}`);
    const goal = await response.json();
    return goal;
}*/

// Create a Goal
export async function createGoal(goal) {
    const response = await fetch('api/goals', {
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
export async function delGoal(id) {
    await fetch(`/api/goals${id}`, {
        method: 'DELETE'
    });
    console.log('Goal has been Deleted!!', id)
}