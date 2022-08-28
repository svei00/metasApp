import { GoalType } from "../types/GoalType";

// Get all goals
export async function getGoals() : Promise<GoalType[]> {              // We use Promise because is an async function so thats why we put between <> and add the square braces at the final of GoalType
  const response = await fetch("api/goals");
  // const response = await fetch('/goals.json');                     // Was. We use this to simulate the web api
  const goals: GoalType[] = await response.json();                    // With that we have converted our function in a Typed function
  return goals;
}

// Get one goal by id
export async function getGoal(id: number) : Promise<GoalType> {       // We do the same with the exception we're taking of the square bracets []
  const response = await fetch(`api/goals${id}`);
  const goal: GoalType = await response.json();
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

export async function createGoal(goal: GoalType) : Promise<GoalType> {  // And so on...
  const response = await fetch("/api/goals", {
    method: "POST",
    body: JSON.stringify(goal),
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
  });
  const goalCreated: GoalType = await response.json();
  console.log("Goal has been created!", goalCreated);
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

export async function updateGoal(goal: GoalType) : Promise<GoalType> {
  const response = await fetch(`/api/goals/${goal.id}`, {
    method: "PUT",
    body: JSON.stringify(goal),
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
  });
  const goalUpdated: GoalType = await response.json();
  console.log("Goal has been updated!!", goalUpdated);
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

export async function delGoal(id: number): Promise<void> {
  await fetch(`/api/goals${id}`, {
    method: "DELETE",
  });
  console.log("Goal has been Deleted!!", id);
}
