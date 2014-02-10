/*global define */
define(['jquery', 'underscore', 'backbone'], 				
	function($, _, Backbone) {
	'use strict';

	// Application Model
	// ------------------
	var AppModel = Backbone.Model.extend({
		// This model contains all of the attributes for the Application
		defaults: {
			headerType: 'default',
			searchMode: 'map',
			username: null,
			fullName: null,
			sortOrder: 'dateUploaded+desc',
			pid: null,
			anchorId: null,
			page: null,
			baseUrl: "http://data.rcg.montana.edu/metacat",
                        //baseUrl: "https://knb.ecoinformatics.org",
			// the most likely item to change is the Metacat deployment context
			context: '/metacat',
                        d1Service: '/d1/mn/v1',
			//d1Service: '/knb/d1/mn/v1',
			viewServiceUrl: null,
			packageServiceUrl: null,
			publishServiceUrl: null,
			authServiceUrl: null,
			queryServiceUrl: null,
			metaServiceUrl: null,
			registryServiceUrl: null,
			ldapwebServiceUrl: null,
			metacatServiceUrl: null
		},
		
		initialize: function() {
			
			//For IE
			if (!window.location.origin) {
				var baseUrl = window.location.protocol + "//" + window.location.host;
				
				this.set('baseUrl', baseUrl);
			}
			
			// these are pretty standard, but can be customized if needed
			this.set('viewServiceUrl', this.get('baseUrl') + this.get('d1Service') + '/views/metacatui/');
			this.set('packageServiceUrl', this.get('baseUrl')+ this.get('d1Service') + '/package/');
			this.set('publishServiceUrl', this.get('baseUrl') + this.get('d1Service') + '/publish/');
			this.set('authServiceUrl', this.get('baseUrl')  + this.get('d1Service') + '/isAuthorized/');
			this.set('queryServiceUrl', this.get('baseUrl') + this.get('d1Service') + '/query/solr/');
			this.set('metaServiceUrl', this.get('baseUrl') +  this.get('d1Service') + '/meta/');
			this.set('registryServiceUrl', this.get('baseUrl') + '/cgi-bin/register-dataset.cgi');
			this.set('ldapwebServiceUrl', this.get('baseUrl') + '/cgi-bin/ldapweb.cgi');
			this.set('metacatServiceUrl', this.get('baseUrl'));
		}
	
		
	});
	return AppModel;		
});
