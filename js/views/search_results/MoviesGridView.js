define([
  'jquery',
  'underscore',
  'backbone',
  'models/MovieModel',
  'collections/MovieCollection',
  'text!templates/search_results/searchResultsGridTemplate.html'
], function($, _, Backbone, MovieModel, MovieCollection, searchResultsGridTemplate){

  var MoviesGridView = Backbone.View.extend({
    el: $("#page"),
    model: MovieModel,
    render: function(searchString){
      this.$el.html(searchResultsGridTemplate);

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
        var compiledTemplate = _.template( searchResultsGridTemplate, data );
        $("#page").html( compiledTemplate ); 
      });

     
    }
  });
   return MoviesGridView;
});