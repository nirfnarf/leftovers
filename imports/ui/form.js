import { Template } from 'meteor/templating';
import { Leftovers } from '../api/leftovers.js';
import './form.html';

Template.form.events({
    'click .upload': function() {
      filepicker.pick(
        {
          mimetypes: ['image/gif','image/jpeg','image/png'],
          multiple: false
        },
        function(fileData) {
            Leftovers.insert({
              owner: Meteor.userId(),
              username: Meteor.user().username,
              fileData,
              createdAt: new Date()
            });
        },
        function(FPError){
           if(FPError && FPError.code !== 101)
            alert(FPError.toString());
        }
      );
    }
});    
