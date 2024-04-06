import { FRIDAY_SCHEDULE } from './schedule';
import styles from './style.module.scss';

const Schedule = () => {
  const schedule = FRIDAY_SCHEDULE;

  return (
    <div className={styles.container}>
      <h2>Schedule</h2>
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
