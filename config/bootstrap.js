/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function(done) {
  // Set up administrators when there is no users and devMode is true
  if ((await Users.count()) === 0 && sails.config.custom.devMode) {
    await Users.createEach([
      {
        firstName: 'Admin',
        lastName: 'User',
        email: 'admin@admin.com',
        username: 'admin',
        password: await sails.helpers.passwords.hashPassword('admin'), // Hash password
      },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@doe.com',
        username: 'johndoe1',
        password: await sails.helpers.passwords.hashPassword('john'), // Hash password
      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane@doe.com',
        username: 'janedoe1',
        password: await sails.helpers.passwords.hashPassword('jane'), // Hash password
      },
      {
        firstName: 'Student',
        lastName: 'Tester',
        email: 'student@test.com',
        username: 'studenttest1',
        password: await sails.helpers.passwords.hashPassword('test'), // Hash password
      },
      {
        firstName: 'Abigail',
        lastName: 'Star',
        email: 'abby@valley.com',
        username: 'abbyvalley1',
        password: await sails.helpers.passwords.hashPassword('abby'), // Hash password
      },
      {
        firstName: 'Gunther',
        lastName: 'Hansen',
        email: 'gunther@valley.com',
        username: 'gunthervalley1',
        password: await sails.helpers.passwords.hashPassword('gunther'), // Hash password
      }
    ]);
  }
  if((await Tasks.count()) === 0) {
    await Tasks.createEach([
      {
        code: 'T1',
        name: 'Added an event to the schedule',
        taskDescription: 'Add a class or event to the schedule',
        taskPoints: 1,
      },
      {
        code: 'T2',
        name: 'Visited the dorm page',
        taskDescription: 'Visit the dorm information page to learn about different dorm options on campus',
        taskPoints: 1,
      },
      {
        code: 'T3',
        name: 'Visited the campus events page',
        taskDescription: 'Visit the campus events and facilities page to learn about upcoming events and campus facilities',
        taskPoints: 1,
      },
      {
        code: 'T4',
        name: 'Visited the faculty page',
        taskDescription: 'Visit the faculty page to learn about the staff and faculty at NCF',
        taskPoints: 1,
      },
      {
        code: 'T5',
        name: 'Completed their profile',
        taskDescription: 'Complete your profile',
        taskPoints: 1,
      }
    ]);
  }
  if((await AcademicCal.count()) === 0) {
    await AcademicCal.createEach([
      {
        subject: 'Last Installment on Payment Plans Due ($100 Penalty)',
        description: 'Last Installement on Payment Plans Due',
        eventDate: '2023-03-17',
        startTime: '10:00',
        endTime: '17:00',
        allDayEvent: false,
        location: ' ',

    },
    {
        subject: 'Module 1 Ends',
        description: 'Module 1 Ends',
        eventDate: '2023-03-17',
        startTime: '10:00',
        endTime: '17:00',
        allDayEvent: false,
        location: ' ',
    },
    {
      subject: 'Spring Break Begins',
      description: 'Spring Break Begins',
      eventDate: '2023-03-20',
      startTime: '10:00',
      endTime: '17:00',
      allDayEvent: false,
      location: ' ',

  },
  {
    subject: 'Spring Break Ends',
    description: 'Spring Break Ends',
    eventDate: '2023-03-24',
    startTime: '10:00',
    endTime: '17:00',
    allDayEvent: false,
    location: ' ',

},
{
  subject: 'Module 2 Begins',
  description: 'Module 2 Begins',
  eventDate: '2023-03-27',
  startTime: '10:00',
  endTime: '17:00',
  allDayEvent: false,
  location: ' ',

},
{
  subject: 'Deadline to Request Readmission for Fall Semester',
  description: 'Deadline to Request Readmission for Fall Semester',
  eventDate: '2023-03-31',
  startTime: '10:00',
  endTime: '17:00',
  allDayEvent: false,
  location: ' ',

},
{
  subject: 'Off-Campus Study Declaration Deadline',
  description: 'Off-Campus Study Declaration Deadline',
  eventDate: '2023-03-31',
  startTime: '10:00',
  endTime: '17:00',
  allDayEvent: false,
  location: ' ',

},
{
  subject: 'Fall Semester Academic Contract Registration Begins',
  description: 'Fall Semester Academic Contract Registration Begins',
  eventDate: '2023-04-03',
  startTime: '10:00',
  endTime: '17:00',
  allDayEvent: false,
  location: ' ',

},
{
  subject: 'Advising Day (No Classes)',
  description: 'Advising Day (No Classes)',
  eventDate: '2023-04-06',
  startTime: '10:00',
  endTime: '17:00',
  allDayEvent: false,
  location: ' ',

},
{
  subject: 'Provisional AOC Plan Submission Deadline (for 4th Term Students)',
  description: 'Provisional AOC Plan Submission Deadline (for 4th Term Students)',
  eventDate: '2023-04-07',
  startTime: '10:00',
  endTime: '17:00',
  allDayEvent: false,
  location: ' ',

},
{
  subject: 'Thesis Prospectus/AOC Form Deadline (for 6th Term Students)',
  description: 'Thesis Prospectus/AOC Form Deadline (for 6th Term Students)',
  eventDate: '2023-04-07',
  startTime: '10:00',
  endTime: '17:00',
  allDayEvent: false,
  location: ' ',

},
{
  subject: 'Spring Contract Renegotiation Deadline',
  description: 'Spring Contract Renegotiation Deadline',
  eventDate: '2023-04-21',
  startTime: '10:00',
  endTime: '17:00',
  allDayEvent: false,
  location: ' ',

},
{
  subject: 'Baccalaureate/ Reading Days (No Classes)',
  description: 'Baccalaureate/ Reading Days (No Classes)',
  eventDate: '2023-04-24',
  startTime: '10:00',
  endTime: '17:00',
  allDayEvent: false,
  location: ' ',

},
{
  subject: 'Baccalaureate/ Reading Days (No Classes)',
  description: 'Baccalaureate/ Reading Days (No Classes)',
  eventDate: '2023-04-25',
  startTime: '10:00',
  endTime: '17:00',
  allDayEvent: false,
  location: ' ',

},
{
  subject: 'Baccalaureate/ Reading Days (No Classes)',
  description: 'Baccalaureate/ Reading Days (No Classes)',
  eventDate: '2023-04-26',
  startTime: '10:00',
  endTime: '17:00',
  allDayEvent: false,
  location: ' ',

},
{
  subject: 'Spring Classes End',
  description: 'Spring Classes End',
  eventDate: '2023-05-12',
  startTime: '10:00',
  endTime: '17:00',
  allDayEvent: false,
  location: ' ',

},
{
  subject: 'Baccalaureate Exam Reports Due for May Degree Conferral',
  description: 'Baccalaureate Exam Reports Due for May Degree Conferral',
  eventDate: '2023-05-12',
  startTime: '10:00',
  endTime: '17:00',
  allDayEvent: false,
  location: ' ',

},
{
  subject: 'Reading Days (No Classes)',
  description: 'Reading Days (No Classes)',
  eventDate: '2023-05-15',
  startTime: '10:00',
  endTime: '17:00',
  allDayEvent: false,
  location: ' ',

},
{
  subject: 'Reading Days (No Classes)',
  description: 'Reading Days (No Classes)',
  eventDate: '2023-05-16',
  startTime: '10:00',
  endTime: '17:00',
  allDayEvent: false,
  location: ' ',

},
{
  subject: 'Evaluation Submission Deadline (potential graduates)',
  description: 'Evaluation Submission Deadline (potential graduates)',
  eventDate: '2023-05-15',
  startTime: '10:00',
  endTime: '17:00',
  allDayEvent: false,
  location: ' ',

},
{
  subject: 'Contract Certification Deadline (potential graduates)',
  description: 'Contract Certification Deadline (potential graduates)',
  eventDate: '2023-05-16',
  startTime: '10:00',
  endTime: '17:00',
  allDayEvent: false,
  location: ' ',

},
{
  subject: 'Final Exams/Advising',
  description: 'Final Exams/Advising',
  eventDate: '2023-05-17',
  startTime: '10:00',
  endTime: '17:00',
  allDayEvent: false,
  location: ' ',

},
{
  subject: 'Final Exams/Advising',
  description: 'Final Exams/Advising',
  eventDate: '2023-05-18',
  startTime: '10:00',
  endTime: '17:00',
  allDayEvent: false,
  location: ' ',

},
{
  subject: 'Final Exams/Advising',
  description: 'Final Exams/Advising',
  eventDate: '2023-05-19',
  startTime: '10:00',
  endTime: '17:00',
  allDayEvent: false,
  location: ' ',

},
{
  subject: 'May Degree Conferral',
  description: 'May Degree Conferral',
  eventDate: '2023-05-19',
  startTime: '10:00',
  endTime: '17:00',
  allDayEvent: false,
  location: ' ',

},
{
  subject: 'Commencement (Aug, Jan, and May degree conferrals included)',
  description: 'Commencement (Aug, Jan, and May degree conferrals included)',
  eventDate: '2023-05-19',
  startTime: '10:00',
  endTime: '17:00',
  allDayEvent: false,
  location: ' ',

},
{
  subject: 'Evaluation Submission Deadline (students on probation)',
  description: 'Evaluation Submission Deadline (students on probation)',
  eventDate: '2023-05-23',
  startTime: '10:00',
  endTime: '17:00',
  allDayEvent: false,
  location: ' ',

},
{
  subject: 'Contract Certification Deadline (students on probation)',
  description: 'Contract Certification Deadline (students on probation)',
  eventDate: '2023-05-24',
  startTime: '10:00',
  endTime: '17:00',
  allDayEvent: false,
  location: ' ',

},
{
  subject: 'Memorial Day (Offices Closed)',
  description: 'Memorial Day (Offices Closed)',
  eventDate: '2023-05-29',
  startTime: '10:00',
  endTime: '17:00',
  allDayEvent: false,
  location: ' ',

},
{
  subject: 'Interterm ISP Evaluation Deadline',
  description: 'Interterm ISP Evaluation Deadline',
  eventDate: '2023-05-31',
  startTime: '10:00',
  endTime: '17:00',
  allDayEvent: false,
  location: ' ',

},
{
  subject: 'Evaluation Submission Deadline (all students)',
  description: 'Evaluation Submission Deadline (all students)',
  eventDate: '2023-05-31',
  startTime: '10:00',
  endTime: '17:00',
  allDayEvent: false,
  location: ' ',

},
]);
  }

  // Don't forget to trigger `done()` when this bootstrap function's logic is finished.
  // (otherwise your server will never lift, since it's waiting on the bootstrap)
  return done();
};
