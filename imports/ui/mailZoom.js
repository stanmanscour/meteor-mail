import { Template } from 'meteor/templating';
import { Session } from 'meteor/session'
import { Tasks } from '../api/tasks.js';

import './mailZoom.html';

Session.get('email-id');

Template.email.helpers({

	//console.log('hey 1');

	renderThis : function(){
		
		// var hey = Tasks.findOne({'author': 'Stan'});
		// console.log(hey);
		author = Tasks.findOne({'author': 'Stan'}).author;
		console.log(author);
		return author;
	}
			
	// name: function(){
	// 	return Session.get('julien');
	// },


	// message: function(){
	// 	return Session.get('email-message');
	// }
	// render(){
	// 	const id = Session.get('email-id');
	// 	return Tasks.find({});
	// }

})
