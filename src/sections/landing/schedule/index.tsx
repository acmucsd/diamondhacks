import { useState } from 'react';
import { FRIDAY_SCHEDULE } from './schedule';
import styles from './style.module.scss';

const Schedule = () => {
  const [display, setDisplay] = useState<'Friday' | 'Saturday'>('Friday');
  const schedule = FRIDAY_SCHEDULE;

  return (
    <div className={styles.container} id="schedule">
      <div className={styles.header}>
        <h2>Schedule</h2>
        <select
          value={display}
          onChange={e => setDisplay(e.target.value === 'Friday' ? 'Friday' : 'Saturday')}
        >
          <option>Friday</option>
          <option>Saturday</option>
        </select>
      </div>
      <table>
        <tr>
          <th>Type</th>
          <th>Time</th>
          <th>Event</th>
          <th>Location</th>
        </tr>
        {schedule.map(item => (
          <tr key={item.name}>
            <td>
              <div className={styles.tag} data-type={item.type}>
                {item.type}
              </div>
            </td>
            <td>{item.time}</td>
            <td>{item.name}</td>
            <td>{item.location}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Schedule;
