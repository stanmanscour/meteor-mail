import { Template } from 'meteor/templating';
import { Session } from 'meteor/session'
import { Tasks } from '../api/tasks.js';
import './task.html';

Template.task.events({
	'click .toggle-checked'(){

		Tasks.update(this._id, {
			$set: { checked : ! this.checked },
		});
	},

	'click .delete'(){
		Tasks.remove(this._id);
	},

	'click .js-message-zoom'(){
		console.log(this);
		var p = event.target;
		// zoom sur le mail
	},

	'click .js-article'(a, b){

		// variable de session = id de l'article
		Session.set({
			'email-id': this._id,
			'email-essage': 'HEY'
		}),



		$('.js-article.new').removeClass('new');

		$(a.currentTarget).toggleClass('new');

		//update celui de l'id 
		Tasks.update(this._id, {
			$set: { opened : true},
		});
	}
	// recupérer l'id pour le mettre dans la session
})

