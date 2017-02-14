import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  this.answer = new ReactiveVar();
  Meteor.call('deepThought', (error, result) => {
    this.answer.set(result);
  });
});

Template.hello.helpers({
  answer() {
    return Template.instance().answer.get();
  },
});

