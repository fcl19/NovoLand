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
        }
      ]);
    }
  }
  // Don't forget to trigger `done()` when this bootstrap function's logic is finished.
  // (otherwise your server will never lift, since it's waiting on the bootstrap)
  return done();
};
