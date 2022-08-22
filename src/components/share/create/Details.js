import { useEffect, useState, useContext} from 'react';
import { useNavigate, useParams } from 'react-router'; 
import { Context } from '../../../services/Memory';
import { updateGoal } from '../../../services/Queries';
import styles from "./Details.module.css";

function Details() {

    const { id } = useParams();                                 // We use this line of code in useEffect
 
    const [form, setForm] = useState({                          // Creation of the hook
        details: '',
        events: 3,
        frecuency: 'a week',
        icon: '📚',
        goal: 12,
        term: '2022-12-31',
        complete: 4
    });

    const [state, dispatch] = useContext(Context);

    const {details, events, frecuency, icon, goal, term, complete} = form;         // Extract the data

    const onChange = (event, prop) => {                             // onChange event (This is very important)
        setForm(state => ({ ...state, [prop]: event.target.value }));
        console.log(form);
    }

    useEffect(() => {                                                  // Now it wors with useParams so when chance the id it changes the whole content
        // console.log(form);
        const isMemory = state.objects[id];                             // Error handler, if id is in memory...
        
        if(!id) return;                                                 // We use this line of code to difference between create and update
        if (!isMemory) {
            return navigate('/404');                                    // Otherwise
        }

        setForm(state.objects[id]);    
    }, [id]);                                                          // Was [form]; and abobe wasn't setForm...

    const navigate = useNavigate();

    const create = async() => {
        console.log(form);                                              // Just to check if it works. Not necesary
        //const newGoal = await createGoal(form);                       // 08/21 uncommnet when re do last react chapter
        //dispatch({ type: 'create', goal: newGoal });                  // 08/21 uncomment
        navigate('/list');
    }

    const update = async () => {
        //const goalUpdated = await updateGoal(form);
        //dispatch({ type: 'update', goal: goalUpdated});
        navigate('/list');
    }

    const del = async () => {                                           // It is not necesary to add async
        // await delGoal(form.id);
        // dispatch({ type: 'del', id: form.id});
        navigate('/list');
    }

    const cancel = () => {
        navigate('/list');
    }

    const frecuencietls = ['per day', 'a week', 'a month', 'a year'];   // Just an alternatuve to see what happened

    let frequencies = [
        {
            "value": "daily",
            "option": "per day"
        }, 
        {
            "value": "weekly",
            "option": "a week"
        }, 
        {
            "value": "monthly",
            "option": "a month"
        }, 
        {
            "value": "yearly",
            "option": "a year"
        }
    ];

    let icons= ["💻", "🏃‍♂️", "📚", "✈️", "🏞️", "💵"]; //["U+1F4BB", "U+1F3C3", "U+1F4DA", "U+2708", "U+1F3DE", "U+1F4B5"];

    return (
        <div className="card">
            <form className="p-4">
                <label className="label">Describe your Goal:
                    <input 
                        className="input" 
                        placeholder="Ex. Take a walk once a week"
                        value={details}
                        onChange = {e => onChange(e, 'details')}
                    />
                </label>
                <label className="label">How Often?: <span>Ex. a Week</span>
                    <div className="flex mb-6">
                        <input 
                            className="input mr-6" 
                            type="number"
                            value={events}
                            onChange = {e => onChange(e, 'events')}
                        />
                        {/* One Way
                        <select className="input">
                            <option value="daily">per day</option>
                            <option value="weekly">a week</option>
                            <option value="monthly">a moth</option>
                            <option value="yearly">a year</option>
                        </select>
                        */}
                        <select 
                            className="input"
                            value={frecuency}
                            onChange = {e => onChange(e, 'frecuency')} 
                        >
                            {frequencies.map(op => <option key={op} value={op.value}>{op.option}</option>)}
                            {/*{frecuencietls.map(op => <option value ={op}>{op}</option>)}*/}
                            
                        </select>
                    </div>
                </label>
                <label className="label">How many times?:
                    <input 
                        className="input" 
                        type="number"
                        value={goal}
                        onChange = {e => onChange(e, 'goal')} 
                    />
                </label>
                <label className="label">When do you want to achieve this?:
                    <input 
                        className="input" 
                        type='date'
                        value={term}
                        onChange = {e => onChange(e, 'term')}    
                    /></label>
                <label className="label">How many times have you complethed this?
                    <input 
                        className="input" 
                        type='number'
                        value={complete}
                        onChange = {e => onChange(e, 'complete')} 
                    />
                </label>
                <label className="label">Pick an icon for this goal
                    <select 
                        className="input"
                        value={icon}
                        onChange = {e => onChange(e, 'icon')}
                    >
                        {icons.map(option => <option key={option} value={option}>{option}</option>)}
                    </select>
                </label>
            </form>
            <div className={styles.buttons}>
                {!id && <button                         // We use !id to determine which button to show 
                    className="button button--green"
                    onClick={create}
                >
                    Create
                </button>}
                
                {id && <button                          // We use id to determine if show update or create button
                    className='button button--blue'
                    onClick={update}
                >
                    Update
                </button>}

                {id && <button                          // Same as Update
                    className='button button--red'
                    onClick={del}
                >
                    Delete                    
                </button>}

                <button 
                    className="button button--gray"
                    onClick={cancel}
                >
                    Cancel
                </button>
            </div>
        </div>
      );
}

export default Details;