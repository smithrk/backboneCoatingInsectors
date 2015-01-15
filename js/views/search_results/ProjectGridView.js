/**
 * Movie Grid View processes data from MovieCollection to display to the user in Grid form
 * source data: MovieCollection
 * template: searchResultsGridTemplate.html
 */

define([
  'jquery',
  'underscore',
  'backbone',
  'models/ProjectModel',
  'collections/ProjectCollection',
  'text!templates/search_results/searchResultsGridTemplate.html'
], function($, _, Backbone, ProjectModel, ProjectCollection, searchResultsGridTemplate){

  var ProjectGridView = Backbone.View.extend({
    el: $("#searchResults"),
    model: ProjectModel,
    render: function(searchString){
      // display Something while searching is in progress so the user is aware of action
      //this.$el.html('<div class="searchLoader">Searching...</div>');
      
      // instantiate a new movie collection class to get search results
      var projects = new ProjectCollection();
      
      // fetch the data from the source using the search string populated by the search form
      projects.fetch({
        reset: true
      });
      
      // clear the existing results for a new search, and then display the results using the movie model
      projects.bind('reset', function () { 
        projectData = projects.models; 
        var data = {
                      results: projects.models,
                      _: _ 
                    };
        // compile the view using the search results template, and the search result data returned
        var compiledTemplate = _.template( searchResultsGridTemplate, data );
        
        // output the compiled template to the defined element
        $("#searchResults").html( compiledTemplate ); 
      });
     
    }
  });
   return ProjectGridView;
});