define([
  'jquery',
  'underscore',
  'backbone',
  'models/MovieModel'
], function($, _, Backbone, MovieModel) {
  	var MovieCollection = Backbone.Collection.extend({
				model: MovieModel,
				//url: '../data/starwars.json',
				url: 'http://www.omdbapi.com/?r=JSON&',
				sync: function(method, collection, options){
					this.url+='s='+options.query;
					options.dataType = 'json';
					return Backbone.sync(method,collection,options);
				},
				parse : function(response) {
					return response['Search'];
				},
				error : function(collection, response, options) {
					error.log(response.statusText);
				},
				initialize: function(){
					
				},
				timeout : 5000
			});
	return MovieCollection;
});
