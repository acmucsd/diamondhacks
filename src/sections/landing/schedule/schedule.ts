export interface ScheduleItem {
  type: 'Main Event' | 'Social' | 'Workshop' | 'Info' | 'Deadline';
  time: string;
  name: string;
  location: string;
}

export const LOCATION_MAPS_LINKS = new Map(
  Object.entries({
    'SDSC Auditorium': 'https://maps.app.goo.gl/ufpRChWo2hN9icCR9',
    'Warren Bear Lawn': 'https://maps.app.goo.gl/ZP7Kuzgd7GmEtYRVA',
    'Warren Mall': 'https://maps.app.goo.gl/cKE8SEfpLqzuH74r8',
    'CSE Basement': 'https://maps.app.goo.gl/TWMRfjrCGXBAzE847',
    'Multipurpose Room': 'https://maps.app.goo.gl/UjQpkzsKZu3iRUDf8',
    'CSE 1202': 'https://maps.app.goo.gl/TWMRfjrCGXBAzE847',
  })
);

const newScheduleItem = (
  type: 'Main Event' | 'Social' | 'Workshop' | 'Info' | 'Deadline',
  time: string,
  name: string,
  location: string
): ScheduleItem => ({ type, time, name, location });

export const SATURDAY_SCHEDULE: ScheduleItem[] = [
  newScheduleItem('Info', '8:30 AM - 9:30 AM', 'Check-in', 'SDSC Auditorium'),
  newScheduleItem('Main Event', '9:30 AM - 10:15 AM', 'Opening Ceremony', 'SDSC Auditorium'),
  newScheduleItem('Social', '10:30 AM - 11:00 AM', 'Team Formation', 'Warren Bear Lawn'),
  newScheduleItem('Info', '11:00 AM', 'Hacking Starts!', 'CSE Basement'),
  newScheduleItem('Info', '12:00 PM', 'Lunch Distribution', 'Warren Mall'),
  newScheduleItem(
    'Workshop',
    '2:00 PM - 3:00 PM',
    'Next.js and React (hosted by ACM Hack)',
    'CSE 1202'
  ),
  newScheduleItem('Workshop', '3:00 PM - 4:00 PM', 'Deep Learning (hosted by DS3)', 'CSE 1202'),
  newScheduleItem('Social', '4:00 PM - 5:00 PM', 'Pirate Charades', 'CSE 1202'),
  newScheduleItem(
    'Workshop',
    '5:00 PM - 6:00 PM',
    'Machine Learning Prototyping (hosted by ACM)',
    'CSE 1202'
  ),
  newScheduleItem('Info', '6:00 PM', 'Dinner Distribution', 'Warren Mall'),
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
  newScheduleItem('Info', '9:00 PM', 'Venues Close', 'All Venues'),
];

export const SUNDAY_SCHEDULE = [
  newScheduleItem('Info', '8:30 AM', 'Breakfast Distribution', 'Warren Mall'),
  newScheduleItem('Workshop', '9:00 AM - 10:00 AM', 'Career Talk with CoCalc', 'CSE 1202'),
  newScheduleItem('Workshop', '10:00 AM - 11:00 AM', 'Intro to RegEx (hosted by TSE)', 'CSE 1202'),
  newScheduleItem(
    'Workshop',
    '11:00 AM - 12:00 PM',
    'Intro to Backend and APIs (hosted by IEEE)',
    'CSE 1202'
  ),
  newScheduleItem('Info', '12:00 PM', 'Lunch Distribution', 'Warren Mall'),
  newScheduleItem(
    'Workshop',
    '1:00 PM - 2:00 PM',
    'Intro to Web Security (hosted by ACM Cyber)',
    'CSE 1202'
  ),
  newScheduleItem(
    'Workshop',
    '2:00 PM - 3:00 PM',
    'Intro to Website Design (hosted by DS3)',
    'CSE 1202'
  ),
  newScheduleItem('Workshop', '3:00 PM - 4:00 PM', 'Ethics in AI (hosted by ACM AI)', 'CSE 1202'),
  newScheduleItem('Deadline', '5:00 PM', 'Project Submissions Due!', 'All Venues'),
  newScheduleItem('Info', '6:00 PM', 'Dinner Distribution', 'Warren Mall'),
  newScheduleItem(
    'Main Event',
    '7:00 PM - 9:00 PM',
    'Closing Ceremony & Awards',
    'Multipurpose Room'
  ),
];
