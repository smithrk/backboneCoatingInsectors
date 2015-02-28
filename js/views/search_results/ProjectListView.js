/**
 * project List View processes data from projectCollection to display to the user in list form
 * source data: projectCollection
 * template: searchResultsListTemplate.html
 */

define([
  'jquery',
  'underscore',
  'backbone',
  'models/ProjectModel',
  'collections/ProjectCollection',
  'views/search_forms/ProjectSearchFormView',
  'text!templates/search_results/searchResultsListTemplate.html'
], function($, _, Backbone, ProjectModel, ProjectCollection, ProjectSearchFormView, searchResultsListTemplate){

  var ProjectListView = Backbone.View.extend({
    el: $("#searchResults"),
    model: ProjectModel,
    render: function(searchString){
        
      // display Something while searching is in progress so the user is aware of action
      this.$el.html('<div class="searchLoader">Searching...</div>');
      
      // instantiate a new project collection class to get search results
      var projects = new ProjectCollection();
      
      // fetch the data from the source using the search string populated by the search form
      projects.fetch({
        reset: true,
        query: searchString
      });
      
      // clear the existing results for a new search, and then display the results using the project model
      projects.bind('reset', function () { 
        projectData = projects.models; 
        var data = {
                      results: projects.models,
                      _: _ 
                    };
        // compile the view using the search results template, and the search result data returned
        var compiledTemplate = _.template( searchResultsListTemplate, data );
        
        // output the compiled template to the defined element
        $("#searchResults").html( compiledTemplate ); 
      });
    }
  });
   return ProjectListView;
});