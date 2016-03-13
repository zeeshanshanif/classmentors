'use strict';

import {classMentors} from '../../module.js';

import tmpl from './2015-ace-view.html!text';

classMentors.config([
  '$routeProvider',
  'routes',
  function($routeProvider, routes) {
    $routeProvider.

    when(routes.aceOfCoders, {
      template: tmpl,
      controller: 'ClmAceOfCodersCtrl',
      controllerAs: 'ctrl',
      resolve: {
        'initialData': [
          'clmAceOfCodersCtrlInitialData',
          function(clmAceOfCodersCtrlInitialData) {
            return clmAceOfCodersCtrlInitialData();
          }
        ]
      }
    })

    ;

  }
]);

/**
 * Use to resolve `initialData` of `ClmAceOfCodersCtrl`.
 *
 */
classMentors.factory('clmAceOfCodersCtrlInitialData', [
  '$q',
  function clmAceOfCodersCtrlInitialDataFactory($q) {
    return function clmAceOfCodersCtrlInitialData() {
      return $q.all({});
    };
  }
]);

/**
 * ClmAceOfCodersCtrl
 *
 */
classMentors.controller('ClmAceOfCodersCtrl', [
  'initialData',
  'spfNavBarService',
  '$http',
  function ClmAceOfCodersCtrl(initialData, spfNavBarService, $http) {
    spfNavBarService.update('Ace of Coders');
    this.stats = {};
    var parent = this;
    $http.get('https://dl.dropboxusercontent.com/u/4972572/ace_of_coders_stats.json').
      then(function(response) {
        parent.stats = response.data;
      }
      //, function(response) { // called asynchronously if an error occurs}
      );
  }
]);
