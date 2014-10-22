/**
 * Movie Search Form View displays the search form and process the interactions by the user
 * template: movieSearchFormTemplate.html
 */

define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/search_forms/movieSearchFormTemplate.html'
], function($, _, Backbone, movieSearchFormTemplate){

  var MovieSearchFormView = Backbone.View.extend({
    el: $("#searchFormHolder"),
    render: function(){
      // display the form using the form template
      this.$el.html(movieSearchFormTemplate);
      
      // setup appropriate interactions, and override default actions
      $('#movieSearchForm').submit(
        function(e){
            e.preventDefault();
            var viewStyle = $('form select[name^=viewStyle]').val();
            var searchString = $('form input[name^=searchString]').val();
            window.location.hash = 'movies/'+viewStyle + '/' + encodeURIComponent(searchString);
        });
      $('#movieSearchForm select').change(function(){
            var viewStyle = $('form select[name^=viewStyle]').val();
            var searchString = $('form input[name^=searchString]').val();
            window.location.hash = 'movies/'+viewStyle + '/' + encodeURIComponent(searchString);
      });
    }
  });
  return MovieSearchFormView;
});