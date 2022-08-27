import { createContext, useReducer } from "react";

/* const listMock = [                               // After the localStorage we do not need this anymore
    {
        "id": "1",
        "details": "Run for 30 minutes",
        "frequency": "Daily",
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

/* Was
const initialState = {
    order: [],
    objects: {}
};
*/

// Lines added in order to use localStorage
// const memory = localStorage.getItem('goals');        // Comment since we don't need because is localStorage
const initialState = {
  order: [],
  objects: {},
};

/* Comes from localStorage
    const initialState = memory 
    ? JSON.parse(memory)
    : {
        order: [],
        objects: {}
    };
    */

function reducer(state, action) {
  switch (action.type) {
    case "set": {
      const goals = action.goals;
      const newState = {
        order: goals.map((goal) => goal.id),
        objects: goals.reduce(
          (object, goal) => ({ ...object, [goal.id]: goal }),
          {}
        ),
      };
      // This line was added in order to local storage works. I added the same line of code on all CRUD operatins
      // localStorage.setItem('goals', JSON.stringify(newState)) // We commented the localStorage because it isn't anymore our data source
      return newState;
    }

    case "create": {
      const id = action.goal.id; // This is for backend: action.goal.id; // This is for test String(Math.floor(Math.random() * 100));
      const newState = {
        order: [...state.order, id],
        objects: {
          ...state.objects,
          [id]: action.goal,
        },
      };
      console.log(newState); // To check if something funny happen
      // localStorage.setItem('goals', JSON.stringify(newState))
      return newState;
    }

    case "update": {
      const id = action.goal.id;
      state.objects[id] = {
        ...state.objects[id],
        ...action.goal,
      };
      const newState = { ...state };
      // localStorage.setItem('goals', JSON.stringify(newState))
      return newState;
    }

    case "del": {
      const id = action.id;
      const newOrder = state.order.filter((item) => item !== id);
      delete state.objects[id];

      const newState = {
        order: newOrder,
        objects: state.objects,
      };
      // localStorage.setItem('goals', JSON.stringify(newState))
      return newState;
    }
  }
}

// console.log(reducer(initialState, {type: 'set', goals: listMock}))                   // This is for check if it works but need to uncomment the listMock
// const goals = reducer(initialState, {type: 'set', goals: listMock});                 // We commenented this because changed line 113 from goal to initial state

export const Context = createContext(null);

function Memory({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState); // Was1: initialState instead of goals  Was2: const [state, dispatch] = useReducer(reducer, goals)
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
}

export default Memory;
