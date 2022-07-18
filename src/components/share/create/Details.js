import styles from "./Details.module.css";

function Details() {
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
                <label className="label">Describe your Goal:<input className="input" placeholder="Ex. Take a w alk once a week"/></label>
                <label className="label">How Often?: <span>Ex. a Week</span>
                    <div className="flex mb-6">
                        <input className="input mr-6" type="number"/>
                        {/* One Way
                        <select>
                            <option value="daily">per day</option>
                            <option value="weekly">a week</option>
                            <option value="monthly">a moth</option>
                            <option value="yearly">a year</option>
                        </select>
                        */}
                        <select className="input">
                            {frequencyOptions.map(option => <option value={option.value}>{option.option}</option>)}
                        </select>
                    </div>
                </label>
                <label className="label">How many times?:<input className="input" type="number" /></label>
                <label className="label">When do you want to achieve this?:<input className="input" type='date' /></label>
                <label className="label">How many times have you complethed this?<input className="input" type='number' /></label>
                <label className="label">Pick an icon for this goal
                    <select className="input">
                        {icons.map(option => <option value={option}>{option}</option>)}
                    </select>
                </label>
            </form>
            <div className={styles.buttons}>
                <button className="button button--green">Create</button>
                <button className="button button--red">Cancel</button>
            </div>
        </div>
      );
}

export default Details;