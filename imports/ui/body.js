import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict'

import { Leftovers } from '../api/leftovers.js';
 
import './leftover.js';
import './form.js';
import './body.html';
import './form.html';
 
Template.body.onCreated(function bodyOnCreated() {
  this.state = new ReactiveDict();
});
 
Template.body.helpers({
  leftovers() {
    return Leftovers.find({username: 'hrefna'}, { sort: { createdAt: -1 } });
  },
});
