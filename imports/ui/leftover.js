import { Template } from 'meteor/templating';
import { Leftovers } from '../api/leftovers.js';
import './leftover.html';
 
Template.leftover.helpers({
  filepickerID() {
    return _.last(this.fileData.url.split("/"));
  },
  caption() {
    return this.fileData.filename;
  }
});

Template.leftover.events({
  'click .delete'(event) {
    event.preventDefault();
    Leftovers.remove(this._id);
  },
});
