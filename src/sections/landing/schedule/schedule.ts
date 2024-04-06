interface ScheduleItem {
  type: 'Main Event' | 'Social' | 'Workshop' | 'Notice' | 'Deadline';
  time: string;
  name: string;
  location: string;
}

const newScheduleItem = (
  type: 'Main Event' | 'Social' | 'Workshop' | 'Notice' | 'Deadline',
  time: string,
  name: string,
  location: string
): ScheduleItem => ({ type, time, name, location });

export const FRIDAY_SCHEDULE: ScheduleItem[] = [
  newScheduleItem('Notice', '8:30 AM - 9:30 AM', 'Check-in', 'SC Auditorium'),
  newScheduleItem('Main Event', '9:30 AM - 10:15 AM', 'Opening Ceremony', 'SC Auditorium'),
  newScheduleItem('Social', '10:30 AM - 11:00 AM', 'Team Formation', 'Warren Bear Lawn'),
  newScheduleItem('Notice', '11:00 AM', 'Hacking Starts!', 'CSE Basement'),
  newScheduleItem('Notice', '12:00 PM', 'Lunch Distribution', 'Multipurpose Room'),
  newScheduleItem(
    'Workshop',
    '2:00 PM - 3:00 PM',
    'Next.js and React (hosted by ACM Hack)',
    'CSE 1202'
  ),
  newScheduleItem('Workshop', '3:00 PM - 4:00 PM', 'Deep Learning (hosted by DS3)', 'CSE 1202'),
  newScheduleItem('Social', '4:00 PM - 5:00 PM', 'Gliderport Walk', 'Gliderport'),
  newScheduleItem(
    'Workshop',
    '5:00 PM - 6:00 PM',
    'Machine Learning Prototyping (hosted by ACM)',
    'CSE 1202'
  ),
  newScheduleItem('Notice', '6:00 PM', 'Dinner Distribution', 'Multipurpose Room'),
  newScheduleItem(
    'Social',
    '7:00 PM - 9:00 PM',
    'Pirates of the Caribbean Watch Party',
    'CSE 1202'
  ),
  newScheduleItem('Deadline', '9:00 PM', 'Venues Close', 'All Venues'),
];
