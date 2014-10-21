define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/home/homeTemplate.html',
  'text!templates/search_forms/movieSearchFormTemplate.html'

], function($, _, Backbone, homeTemplate, movieSearchFormTemplate){

  var HomeView = Backbone.View.extend({
    el: $("#page"),
    render: function(){
      this.$el.html(homeTemplate);   
     
    }
  });

  return HomeView;
  
});