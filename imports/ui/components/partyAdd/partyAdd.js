import angular from 'angular';
import angularMeteor from 'angular-meteor';
import clientjs from 'clientjs';

import template from './partyAdd.html';
import { Parties } from '../../../api/parties';

class PartyAdd {
  constructor($scope, $reactive, $stateParams) {
		'ngInject';

		$reactive(this).attach($scope);

		this.partyId = $stateParams.partyId;
    console.log(this.partyId);
    this.party = {};
	}

  submit() {
    if (Meteor.isClient) {
      var client = new ClientJS();
      this.party.fingerprint = client.getFingerprint();
    }
    Parties.insert(this.party);
    this.reset();
  }

  reset() {
    this.party = {};
  }
}

const name = 'partyAdd';

//create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  template,
  controllerAs: name,
  controller: PartyAdd
}).config(config);

function config($stateProvider) {
  'ngInject';

  $stateProvider.state('partyAdd', {
    url: '/parties/edit/:partyId',
    template: '<party-add></party-add>'
  });
}
