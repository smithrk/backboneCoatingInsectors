// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/home/HomeView',
  'views/search_results/MoviesListView',
  'views/search_results/MoviesGridView',
  'views/search_forms/MovieSearchFormView',
], function($, _, Backbone, HomeView, MoviesListView, MoviesGridView, MovieSearchFormView) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      "": "index",
      "/": "index",
      "/#":"index",
      "movies/list/:searchString":"moviesList",
      "movies/grid/:searchString":"moviesGrid",
      "*actions": "defaultRoute" // Backbone will try match the route above first
    },
    index: function(){
      var homeView = new HomeView();
      homeView.render();
    },
    moviesList: function(searchString){
      var moviesListView = new MoviesListView();
      moviesListView.render(searchString);
    },
    moviesGrid: function(searchString){
      var moviesGridView = new MoviesGridView();
      moviesGridView.render(searchString);
    }
    
  });
  
  var initialize = function(){

    var app_router = new AppRouter;
   
    var movieSearchFormView = new MovieSearchFormView();
    movieSearchFormView.render();
    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});