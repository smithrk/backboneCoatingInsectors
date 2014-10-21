define([
  'jquery',
  'underscore',
  'backbone',
  'models/MovieModel',
  'collections/MovieCollection',
  'text!templates/search_results/searchResultsListTemplate.html'
], function($, _, Backbone, MovieModel, MovieCollection, searchResultsListTemplate){

  var MoviesListView = Backbone.View.extend({
    el: $("#page"),
    model: MovieModel,
    render: function(searchString){
      this.$el.html(searchResultsListTemplate);

      var movies = new MovieCollection();
      
      movies.fetch({
        reset: true,
        query: searchString
      });
      movies.bind('reset', function () { 
        movieData = movies.models; 
        var data = {
                      results: movies.models,
                      _: _ 
                    };
        var compiledTemplate = _.template( searchResultsListTemplate, data );
        $("#page").html( compiledTemplate ); 
      });

     
    }
  });
   return MoviesListView;
});