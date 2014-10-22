/**
 * Movie Grid View processes data from MovieCollection to display to the user in Grid form
 * source data: MovieCollection
 * template: searchResultsGridTemplate.html
 */

define([
  'jquery',
  'underscore',
  'backbone',
  'models/MovieModel',
  'collections/MovieCollection',
  'text!templates/search_results/searchResultsGridTemplate.html'
], function($, _, Backbone, MovieModel, MovieCollection, searchResultsGridTemplate){

  var MoviesGridView = Backbone.View.extend({
    el: $("#searchResults"),
    model: MovieModel,
    render: function(searchString){
      // display Something while searching is in progress so the user is aware of action
      this.$el.html('<div class="searchLoader">Searching...</div>');
      
      // instantiate a new movie collection class to get search results
      var movies = new MovieCollection();
      
      // fetch the data from the source using the search string populated by the search form
      movies.fetch({
        reset: true,
        query: searchString
      });
      
      // clear the existing results for a new search, and then display the results using the movie model
      movies.bind('reset', function () { 
        movieData = movies.models; 
        var data = {
                      results: movies.models,
                      _: _ 
                    };
        // compile the view using the search results template, and the search result data returned
        var compiledTemplate = _.template( searchResultsGridTemplate, data );
        
        // output the compiled template to the defined element
        $("#searchResults").html( compiledTemplate ); 
      });
     
    }
  });
   return MoviesGridView;
});