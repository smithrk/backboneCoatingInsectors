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
  'text!templates/search_results/searchResultsGridTemplate.html',
  'views/CardView'
], function($, _, Backbone, ProjectModel, ProjectCollection, searchResultsGridTemplate, CardView){

  var ProjectGridView = Backbone.View.extend({
    el: $("#searchResults"),
    model: ProjectModel,
    subViews: {    },
    initialize: function(){
      //var compiledTemplate = _.template( searchResultsGridTemplate, data );
      var compiledTemplate = _.template('<div class="resultsGrid grid"></div>')
      // output the compiled template to the defined element
      this.$el.html(compiledTemplate());

      // display Something while searching is in progress so the user is aware of action
      //this.$el.html('<div class="searchLoader">Searching...</div>');
      
      // instantiate a new movie collection class to get search results
      var projects = new ProjectCollection();
      
      // fetch the data from the source using the search string populated by the search form
      projects.fetch({
        reset: true
      });
      var self = this;
      // clear the existing results for a new search, and then display the results using the movie model
      projects.bind('reset', function () { 
        var projectData = projects.models; 
        var data = {
                      results: projects.models,
                      _: _ 
                    };
            var i = 0;
          _.each(data.results, function(result){
            var viewProp = {};
            viewProp.el = $('.resultsGrid');
            result.classID = i;
            result.set('classID',i);
            viewProp.model = new Backbone.Model(result.attributes);

            self.subViews[i] = new CardView(viewProp);
            $(self.$el).append(self.subViews[i].contentHolder());
           
            i++;
          });
        // compile the view using the search results template, and the search result data returned
       
      });
    },
    render: function(searchString){
      
      $('.resultsGrid').html(this.el);
      return this;
     
    }
  });
   return ProjectGridView;
});