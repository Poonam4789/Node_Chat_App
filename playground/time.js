var moment = require('moment');
var date = moment();
// var date = new Date();
// var month = ['Jan','Feb'];
//date.add(100,'year').subtract(9,'months');
// console.log("month",date.format('MMM Do, YYYY'));
// console.log("time",date.format('h:mm a'));
var createdAt = 1234;
var date = moment(createdAt);
console.log("time :",date.format('h:mm a'));