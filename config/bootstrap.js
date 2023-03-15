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

  if (await SupplyGroups.count() === 0) {
    //group_code must be unique
    const supplyGroups = await SupplyGroups.createEach([
      {
        group_code: 'RE',
        group_name: 'Room Essentials',
      },
      {
        group_code: 'BE',
        group_name: 'Bath Essentials and Toiletries',
      },
      {
        group_code: 'CS',
        group_name: 'Cleaning Supplies',
      },
      {
        group_code: 'BS',
        group_name: 'Beach Supplies',
      },
      {
        group_code: 'SS',
        group_name: 'School Supplies',
      },
      {
        group_code: 'ES',
        group_name: 'Emergency Essentials',
      },
      {
        group_code: 'OI',
        group_name: 'Other Items',
      }
    ]).fetch();
    if (await Supplies.count() === 0) {
      let groupID = supplyGroups.find((group) => group.group_code === 'RE').id;
      //code must be unique
      await Supplies.createEach([
        {
          code: 'TWINSHEETS',
          name: 'Twin XL Sheets',
          group_id: groupID,
        },
        {
          code: 'PILLOW',
          name: 'Pillows',
          group_id: groupID,
        },
        {
          code: 'BLANKET',
          name: 'Blankets',
          group_id: groupID,
        },
        {
          code: 'LAMP',
          name: 'Lamps',
          group_id: groupID,
        },
        {
          code: 'WASTEBASKET',
          name: 'Waste Basket',
          group_id: groupID,
        },
        {
          code: 'HANGER',
          name: 'Clothing Hangers',
          group_id: groupID,
        },
        {
          code: 'CLOTHING',
          name: 'Clothing',
          group_id: groupID,
        }
      ]);
      groupID = supplyGroups.find((group) => group.group_code === 'BE').id;
      await Supplies.createEach([
        {
          code: 'SHOWERCADDY',
          name: 'Shower Caddy',
          group_id: groupID,
        },
        {
          code: 'BATHTOWEL',
          name: 'Bath Towel',
          group_id: groupID,
        },
        {
          code: 'SHOWERSUP',
          name: 'Shower Supplies (soap, shampoo, conditioner, etc.)',
          group_id: groupID,
        },
        {
          code: 'DEODERANT',
          name: 'Deoderant',
          group_id: groupID,
        },
        {
          code: 'TOOTHBRUSH',
          name: 'Toothbrush',
          group_id: groupID,
        },
        {
          code: 'TOOTHPASTE',
          name: 'Toothpaste',
          group_id: groupID,
        },
        {
          code: 'SHAVINGSUP',
          name: 'Shaving Supplies',
          group_id: groupID,
        },
        {
          code: 'TISSUE',
          name: 'Tissues',
          group_id: groupID,
        },
        {
          code: 'TP',
          name: 'Toilet Paper',
          group_id: groupID,
        }
      ]);
      groupID = supplyGroups.find((group) => group.group_code === 'CS').id;
      await Supplies.createEach([
        {
          code: 'DISHSOAP',
          name: 'Dish Soap',
          group_id: groupID,
        },
        {
          code: 'ROOMSPRAY',
          name: 'Room Deoderizing Spray',
          group_id: groupID,
        },
        {
          code: 'LAUNDRYSUP',
          name: 'Laundry Supplies',
          group_id: groupID,
        },
        {
          code: 'HANDSANITIZER',
          name: 'Hand Sanitizer',
          group_id: groupID,
        },
        {
          code: 'DISINFECTANTSPRAY',
          name: 'Disinfectant Spray',
          group_id: groupID,
        },
        {
          code: 'MULTICLEANER',
          name: 'Multi-Purpose Cleaner',
          group_id: groupID,
        },
        {
          code: 'RAG',
          name: 'Paper Towels or Rags',
          group_id: groupID,
        }
      ]);
      groupID = supplyGroups.find((group) => group.group_code === 'BS').id;
      await Supplies.createEach([
        {
          code: 'SUNGLASSES',
          name: 'Sunglasses',
          group_id: groupID,
        },
        {
          code: 'HAT',
          name: 'Hat',
          group_id: groupID,
        },
        {
          code: 'BEACHTOWEL',
          name: 'Beach Towel',
          group_id: groupID,
        },
        {
          code: 'SUNSCREEN',
          name: 'Sunscreen',
          group_id: groupID,
        },
        {
          code: 'WATERBOTTLE',
          name: 'Water Bottle',
          group_id: groupID,
        },
        {
          code: 'SWIMSUIT',
          name: 'Swimsuit',
          group_id: groupID,
        }
      ]);
      groupID = supplyGroups.find((group) => group.group_code === 'SS').id;
      await Supplies.createEach([
        {
          code: 'COMPUTER',
          name: 'Personal Computer',
          group_id: groupID,
        },
        {
          code: 'PRINTER',
          name: 'Printer',
          group_id: groupID,
        },
        {
          code: 'ETHERNET',
          name: 'Cat 5E or Cat 6 Ethernet Cable',
          group_id: groupID,
        },
        {
          code: 'PRINTERPAPER',
          name: 'Printer Paper',
          group_id: groupID,
        },
        {
          code: 'FLASHDRIVE',
          name: 'Flash Drive',
          group_id: groupID,
        },
        {
          code: 'NOTEBOOK',
          name: 'Notebooks',
          group_id: groupID,
        },
        {
          code: 'LAPTOPLOCK',
          name: 'Laptop Lock',
          group_id: groupID,
        },
        {
          code: 'STAPLER',
          name: 'Stapler',
          group_id: groupID,
        },
        {
          code: 'PENS',
          name: 'Pens and Pencils',
          group_id: groupID,
        },
        {
          code: 'POWERSTRIPS',
          name: 'Power Strips',
          group_id: groupID,
        },
        {
          code: 'BACKPACK',
          name: 'Sturdy Backpack',
          group_id: groupID,
        },
        {
          code: 'PLANNER',
          name: 'Planner/Calendar',
          group_id: groupID,
        },
        {
          code: 'USB',
          name: 'USB Charger',
          group_id: groupID,
        },
        {
          code: 'EARBUDS',
          name: 'Earbuds or Headphones',
          group_id: groupID,
        }
      ]);
      groupID = supplyGroups.find((group) => group.group_code === 'ES').id;
      await Supplies.createEach([
        {
          code: 'MEDICATION',
          name: 'Perscription Medication',
          group_id: groupID,
        },
        {
          code: 'OTCMEDS',
          name: 'Over-the-Counter Medication',
          group_id: groupID,
        },
        {
          code: 'FLASHLIGHT',
          name: 'Flashlight',
          group_id: groupID,
        },
        {
          code: 'BATTERIES',
          name: 'Batteries',
          group_id: groupID,
        },
        {
          code: 'CONTACTS',
          name: 'List of Emergency Contacts',
          group_id: groupID,
        },
        {
          code: 'HEALTHINSURANCE',
          name: 'Health Insurance Card',
          group_id: groupID,
        },
        {
          code: 'FIRSTAID',
          name: 'First-aid Kit with Band-aids',
          group_id: groupID,
        }
      ]);
      groupID = supplyGroups.find((group) => group.group_code === 'OI').id;
      await Supplies.createEach([
        {
          code: 'FAN',
          name: 'Small Fan',
          group_id: groupID,
        },
        {
          code: 'UMBRELLA',
          name: 'Umbrella',
          group_id: groupID,
        },
        {
          code: 'EARPLUGS',
          name: 'Ear Plugs',
          group_id: groupID,
        },
        {
          code: 'SEWINGKIT',
          name: 'Sewing Kit',
          group_id: groupID,
        },
        {
          code: 'TOOLKIT',
          name: 'Small Tool Kit',
          group_id: groupID,
        },
        {
          code: 'STORAGE',
          name: 'Under-the-Bed Storage Bins',
          group_id: groupID,
        },
        {
          code: 'DISHES',
          name: 'Plates, Mugs, Silverware, etc.',
          group_id: groupID,
        },
        {
          code: 'POSTER',
          name: 'Posters and Photos to Hang',
          group_id: groupID,
        },
        {
          code: 'POSTERPUTTY',
          name: 'Poster Putty',
          group_id: groupID,
        },
        {
          code: 'CAMERA',
          name: 'Camera',
          group_id: groupID,
        },
        {
          code: 'CANOPENER',
          name: 'Can Opener',
          group_id: groupID,
        }
      ]);
    }
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
