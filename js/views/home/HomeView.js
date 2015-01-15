/**
 * Home View is a base page view to display the home screen
 * template: homeTemplate.html
 */

define([
  'jquery',
  'underscore',
  'backbone',
  'views/search_results/ProjectGridView',
  'text!templates/home/homeTemplate.html',
  'text!templates/search_forms/movieSearchFormTemplate.html'

], function($, _, Backbone, ProjectGridView, homeTemplate, movieSearchFormTemplate){

  var HomeView = Backbone.View.extend({
    el: $("#page"),
    render: function(){
        // display home template to the defined element "el"
        this.$el.html(homeTemplate);   
        
        // display the search form on the home screen
        // demonstrating how you can pass element selector or other values to models to manipulate their
        // result destination 
        var projectGridView = new ProjectGridView({el:$('#searchFormHolder')});
        projectGridView.render();
    }
  });

  return HomeView;
});