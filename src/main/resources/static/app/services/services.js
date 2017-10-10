'use strict';

angular.module('services.factory', ['ngRoute', 'ngResource'])
        .factory('person', function ($resource) {
            return $resource('/person/:personId', {id: "@_personId"}, {get: {method: 'GET'}});
        })
        .factory('persons', function ($resource) {
            return $resource('/person', {}, {'get': {method: 'GET', isArray: true}, 'update': {method: 'PUT', isArray: false}});
        })
        .factory('newPerson', function ($resource) {
            return $resource('/person/new');
        })
        .factory('deleteObjetivo', function ($resource) {
            return $resource('/person/objetivo/:objetivo', {id: "@_objetivo"}, {'update': {method: 'PUT', isArray: false}});
        })
        .factory('getAreas', function ($resource) {
            return $resource('/areas/all', {}, {'get': {method: 'GET', isArray: true}});
        })
        .factory('getSubreas', function ($resource) {
            return $resource('/subareas/all', {}, {'get': {method: 'GET', isArray: true}});
        })
        .factory('getObjetivos', function ($resource) {
            return $resource('/objetivos/all', {}, {'get': {method: 'GET', isArray: true}});
        })
        .factory('getAreaById', function ($resource) {
            return $resource('/areas/:personId', {id: "@_personId"}, {get: {method: 'GET'}});
        })
        .factory('getSubareaById', function ($resource) {
            return $resource('/subareas/:personId', {id: "@_personId"}, {get: {method: 'GET'}});
        })
        .factory('getObjetivoById', function ($resource) {
            return $resource('/objetivo/:personId', {id: "@_personId"}, {get: {method: 'GET'}});
        })
        ;
