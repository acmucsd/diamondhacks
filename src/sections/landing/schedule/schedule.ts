interface ScheduleItem {
  type: 'Main Event' | 'Social' | 'Workshop' | 'Notice' | 'Deadline';
  time: string;
  name: string;
  location: string;
}

export const LOCATION_MAPS_LINKS = new Map(
  Object.entries({
    'SDSC Auditorium': 'https://maps.app.goo.gl/ufpRChWo2hN9icCR9',
    'Warren Bear Lawn': 'https://maps.app.goo.gl/ZP7Kuzgd7GmEtYRVA',
    'CSE Basement': 'https://maps.app.goo.gl/TWMRfjrCGXBAzE847',
    'Multipurpose Room': 'https://maps.app.goo.gl/UjQpkzsKZu3iRUDf8',
    'CSE 1202': 'https://maps.app.goo.gl/TWMRfjrCGXBAzE847',
    Gliderport: 'https://maps.app.goo.gl/vUXpuGhGyRDkqQvp8',
  })
);

const newScheduleItem = (
  type: 'Main Event' | 'Social' | 'Workshop' | 'Notice' | 'Deadline',
  time: string,
  name: string,
  location: string
): ScheduleItem => ({ type, time, name, location });

export const SATURDAY_SCHEDULE: ScheduleItem[] = [
  newScheduleItem('Notice', '8:30 AM - 9:30 AM', 'Check-in', 'SDSC Auditorium'),
  newScheduleItem('Main Event', '9:30 AM - 10:15 AM', 'Opening Ceremony', 'SDSC Auditorium'),
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
    'Workshop',
    '7:00 PM - 8:00 PM',
    'Intro to Figma (hosted by ACM Design)',
    'CSE 1202'
  ),
  newScheduleItem(
    'Social',
    '8:00 PM - 9:00 PM',
    'Pirates of the Caribbean Watch Party',
    'CSE 1202'
  ),
  newScheduleItem('Notice', '9:00 PM', 'Venues Close', 'All Venues'),
];

export const SUNDAY_SCHEDULE = [];
