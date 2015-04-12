/**
 * Header View is to display the main site header
 * template: headerTemplate.html
 */

define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/home/headerTemplate.html',
  'text!templates/navigation/navigationTemplate.html'

], function($, _, Backbone, headerTemplate, navigation){

  var HeaderView = Backbone.View.extend({
    el: $("#header"),
    render: function(){
         
      this.$el.html(headerTemplate + navigation);   
    }
  });

  return HeaderView;
  
});