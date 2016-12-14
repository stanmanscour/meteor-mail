import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
 
import { Tasks } from '../api/tasks.js';
 
import './mails.js';
import './mailZoom.js';
import './body.html';
 
Template.body.onCreated(function bodyOnCreated(){
	this.state = new ReactiveDict();
})

Template.body.helpers({
  tasks() {
  	const instance = Template.instance();

    return Tasks.find({}, {sort: {createdAt: -1} });
  },
});


Session.set('email-id', 'prouti');


Template.body.events({
	'click #input-submit'(event){
		event.preventDefault();

		$inputAuthor = $('#input-author');
		$inputMessage = $('#input-message');
		$inputTopic = $('#input-topic');
	
		let author = $inputAuthor.val();
		let message = $inputMessage.val();
		let topic = $inputTopic.val();

		console.log(topic);

		// const target = event.target;
		// const text = target.text.value;
		// console.log(event.target);

		// insert a task
		Tasks.insert({
			author,
			topic,
			message,
			createdAt: new Date(),
		})




		// clear
		$inputAuthor.val('');
		$inputMessage.val('');
		$inputTopic.val('');
	},

	'change .hide-completed input'(event, instance){
		instance.state.set('hideCompleted', event.target.checked);
	}

})