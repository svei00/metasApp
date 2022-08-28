import styles from "./Goals.module.css";
import { Link } from "react-router-dom";

// Informatin like the database
/* Was
const goalMock = {
    "id": "1",
    "details": "Run for 30 minutes",
    "frequency": "Daily",
    "events": 1,
    "icon": "🏃",
    "goal": 365,
    "term": "2022-12-31",
    "complete": 10
};
*/

// Use TypeScript in order to make sure that we pass the correct data type
interface GoalProps {
  id: number;
  icon: string;
  events: number;
  frequency: number;
  details: string;
  goal: number;
  complete: number;
}

function Goal({ id, icon, events, frequency, details, goal, complete }: GoalProps) {      // Was: function Goal({ id, icon, events, frequency, details, goal, complete }) {
  // Reestructuring the Meta
  /* Was: const {icon, events, frequency, details, goal, complete } = goalMock; */

  return (
    <Link to={`/list/${id}`} className={styles.goal + " card"}>
      {" "}
      {/* Was: a div */}
      <div className="flex">
        <div className={styles.icon}>{icon}</div> {/* &#127939; */}
        <p className={styles.frequency}>
          {events} <sub>/ {frequency}</sub>{" "}
        </p>
        <p className="item-center justify-center">{details}</p>
      </div>
      <div className="flex">
        <div className="relative m-2 mx-5">
          <p className="text-center">
            {complete} of {goal}
          </p>
          <div className={styles.bar1}>
            <div
              style={{ width: `${Math.round((complete / goal) * 100)}%` }}
              className={styles.bar2}
            ></div>
          </div>
        </div>
        <button className="button button--gray">Complete!</button>
      </div>
    </Link>
  );
}

export default Goal;
