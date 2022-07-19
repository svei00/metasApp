import { useEffect, useState } from 'react';
import styles from "./Details.module.css";

function Details() {

    const [form, setForm] = useState({                          // Creation of the hook
        details: '',
        events: 3,
        term: 'a week',
        icon: '📚',
        goal: 12,
        when: '2022-12-31',
        complete: 4
    });

    const {details, events, term, icon, goal, when, complete} = form;         // Extract the data

    const onChange = (event, prop) => {                             // onChange event (This is very important)
        setForm(state => ({ ...state, [prop]: event.target.value }));
        console.log(form);
    }

    useEffect(() => {
        // console.log(form);    
    }, [form]);

    const create = async() => {
        console.log(form);
    }

    const frequencyOptions = [
        {
            "value": "dayly",
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
                        placeholder="Ex. Take a w alk once a week"
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
                        <select>
                            <option value="daily">per day</option>
                            <option value="weekly">a week</option>
                            <option value="monthly">a moth</option>
                            <option value="yearly">a year</option>
                        </select>
                        */}
                        <select 
                            className="input"
                            value={term}
                        >
                            {frequencyOptions.map(option => <option value={option.value}>{option.option}</option>)}
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
                        value={when}
                        onChange = {e => onChange(e, 'when')}    
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
                        {icons.map(option => <option value={option}>{option}</option>)}
                    </select>
                </label>
            </form>
            <div className={styles.buttons}>
                <button 
                    className="button button--green"
                    onClick={create}
                >
                    Create
                </button>
                <button className="button button--red">Cancel</button>
            </div>
        </div>
      );
}

export default Details;