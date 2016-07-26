import angular from 'angular';
import angularMeteor from 'angular-meteor';
import 'angular-animate';
import 'angular-sanitize';
import 'ionic-scripts';

import template from './partyRemove.html';
import { Parties } from '../../../api/parties';

class PartyRemove {
	constructor($ionicPopup) {
		'ngInject';

		this.$ionicPopup = $ionicPopup;
	}
	remove() {
		if (this.party) {
			if (Meteor.isClient) {
				var confirmPopup = this.$ionicPopup.confirm({
					title: 'Really remove party?',
					template: 'Are you sure you want to remove the party? This cannot be made undone!'
				});
				var partyId = this.party._id;
				confirmPopup.then(function(res) {
					if(res) {
						Parties.remove(partyId);
					}
				});
			} else {
				Parties.remove(this.party._id);
			}
		}
	}
}

const name = 'partyRemove';

export default angular.module(name, [
	angularMeteor,
	'ionic'
]).component(name, {
	template,
	bindings: {
		party: '<'
	},
	controllerAs: name,
	controller: PartyRemove
})