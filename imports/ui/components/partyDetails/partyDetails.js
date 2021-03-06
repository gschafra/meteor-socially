import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './partyDetails.html';

class PartyDetails {
	constructor($scope, $reactive, $stateParams) {
		'ngInject';

		$reactive(this).attach($scope);

		this.partyId = $stateParams.partyId;
	}
}

const name = 'partyDetails';

// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter
]).component(name, {
	template,
	controllerAs: name,
	controller: PartyDetails
}).config(config);

function config($stateProvider) {
  'ngInject';

  $stateProvider.state('partyDetails', {
    url: '/parties/details/:partyId',
    template: '<party-details></party-details>'
  });
}