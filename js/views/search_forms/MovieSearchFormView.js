define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/search_forms/movieSearchFormTemplate.html'
], function($, _, Backbone, movieSearchFormTemplate){

  var MovieSearchFormView = Backbone.View.extend({
    el: $("body"),
    render: function(){
      this.$el.prepend(movieSearchFormTemplate);
      $('#movieSearchForm').submit(
        function(e){
            e.preventDefault();
            var viewStyle = $('form select[name^=viewStyle]').val();
            var searchString = $('form input[name^=searchString]').val();
            window.location.hash = 'movies/'+viewStyle + '/' + encodeURIComponent(searchString);

        });
      
    }
  });
  return MovieSearchFormView;
});