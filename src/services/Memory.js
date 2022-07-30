import { createContext, useReducer } from "react";

const listMock = [
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

const initialState = {
    order: [],
    objects: {}
};

function reducer(state, action) {
    switch (action.type) {
        case 'set': {
            const goals = action.goals;
            const newState = {
                order: goals.map(goal => goal.id),
                objects: goals.reduce((object, goal) => ({...object, [goal.id]: goal}), {})
            };

            return newState;
        };

        case 'create': {
            const id = Math.random();                                                   // This is for backend: action.goal.id;
            const newState = {
                order: [... state.order, id],
                objects: {
                    ...state.objects,
                    [id]: action.goal
                }
            };
            console.log(newState);                                                    // To check if something funny happen
            return newState;
        };

        case 'update': {
            const id = action.goal.id;
            state.objects[id] = {
                ...state.objects[id],
                ...action.goal
            };
            const newState = { ...state };
            return newState;
        };

        case 'del': {
            const id = action.id;
            const newOrder = state.order.filter(item => item !== id);
            delete state.objects[id];

            const newState = {
                order: newOrder,
                objects: state.objects
            };
            return newState;
        };
    }
}

console.log(reducer(initialState, {type: 'set', goals: listMock}))                    // This is for check if it works
const goals = reducer(initialState, {type: 'set', goals: listMock}); 

export const Context = createContext(null);

function Memory({ children }) {

   const [state, dispatch] = useReducer(reducer, goals)                              // Was: initialState instead of goals
   return ( 
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
     );
}

export default Memory;