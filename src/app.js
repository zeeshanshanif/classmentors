'use strict';

import angular from 'angular';
import {classMentors} from './classmentors/index.js';

classMentors.config([
  'spfFirebaseRefProvider',
  function(spfFirebaseRefProvider) {
    const id = window.SINGPATH && window.SINGPATH.firebaseId || 'singpath';

    spfFirebaseRefProvider.setBaseUrl(`https://${id}.firebaseio.com/`);
  }
]);

classMentors.run([
  '$window',
  'clmServicesUrl',
  function($window, clmServicesUrl) {
    const singpath = $window.SINGPATH && $window.SINGPATH.singpathURL || 'http://www.singpath.com/';
    const backend = $window.SINGPATH && $window.SINGPATH.backendURL || 'http://api.singpath.com/';

    clmServicesUrl.singPath = singpath;
    clmServicesUrl.singPath = backend;
  }
]);

angular.element(document).ready(function() {
  angular.bootstrap(document, [classMentors.name], {strictDi: true});
});
