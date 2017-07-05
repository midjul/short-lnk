import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { Accounts } from 'meteor/accounts-base';

Meteor.startup(() => {
  Accounts.validateNewUser((user) => {
   console.log('this is the user', user);
   return true;
  })
  /* 
   const employeeSchema = new SimpleSchema({
     name: {
       type: String,
       min: 1,
       max: 200
     },
     hourlyWage: {
       type: Number,
       min: 1
     },
     email: {
       type: String,
       regEx: SimpleSchema.RegEx.Email
     }
 
   });
 
   employeeSchema.validate({
     name: "midhet",
     hourlyWage: 12,
     email: "djulovic_m@hotmail.com"
   })
    */
});
