import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  console.log('The answer to the ultimate question of life, the universe and everything is ...', Meteor.call('deepThought'));
});

Meteor.methods({
  async deepThought() {
    return await 42;
  },
});

