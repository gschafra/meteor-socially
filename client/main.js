import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { name as Socially } from '../imports/ui/components/socially/socially';

//Startup
if (Meteor.isCordova) {
	angular.element(document).on('deviceready', onReady);
}
else {
	angular.element(document).ready(onReady);
}

function onReady() {
	angular.bootstrap(document, [Socially]);
}