import { useState } from 'react';
import { LOCATION_MAPS_LINKS, SATURDAY_SCHEDULE, SUNDAY_SCHEDULE, ScheduleItem } from './schedule';
import styles from './style.module.scss';
import Link from 'next/link';

interface ScheduleViewProps {
  schedule: ScheduleItem[];
}

const ScheduleDesktop = ({ schedule }: ScheduleViewProps) => {
  return (
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
          <td>
            {LOCATION_MAPS_LINKS.has(item.location) ? (
              <Link
                href={LOCATION_MAPS_LINKS.get(item.location) as string}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.location}
              </Link>
            ) : (
              item.location
            )}
          </td>
        </tr>
      ))}
    </table>
  );
};

const ScheduleMobile = ({ schedule }: ScheduleViewProps) => {
  return (
    <div className={styles.mobileContainer}>
      {schedule.map(item => (
        <div key={item.name} className={styles.card}>
          <div className={styles.tag} data-type={item.type}>
            {item.type}
          </div>
          <div className={styles.title}>
            <strong>{item.name}</strong>
            <div>
              {LOCATION_MAPS_LINKS.has(item.location) ? (
                <Link
                  href={LOCATION_MAPS_LINKS.get(item.location) as string}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @ {item.location}
                </Link>
              ) : (
                `@ ${item.location}`
              )}
            </div>
          </div>
          <div>{item.time}</div>
        </div>
      ))}
    </div>
  );
};

const Schedule = () => {
  const [display, setDisplay] = useState<'Saturday' | 'Sunday'>('Saturday');
  const schedule = display === 'Saturday' ? SATURDAY_SCHEDULE : SUNDAY_SCHEDULE;

  return (
    <div className={styles.container} id="schedule">
      <div className={styles.header}>
        <h2>Schedule</h2>
        <select
          value={display}
          onChange={e => setDisplay(e.target.value === 'Saturday' ? 'Saturday' : 'Sunday')}
        >
          <option>Saturday</option>
          <option>Sunday</option>
        </select>
      </div>
      <ScheduleDesktop schedule={schedule} />
      <ScheduleMobile schedule={schedule} />
    </div>
  );
};

export default Schedule;
