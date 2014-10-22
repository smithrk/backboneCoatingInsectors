/**
 * Header View is to display the main site header
 * template: headerTemplate.html
 */

define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/home/headerTemplate.html'

], function($, _, Backbone, headerTemplate){

  var HeaderView = Backbone.View.extend({
    el: $("#header"),
    render: function(){
      this.$el.html(headerTemplate);   
    }
  });

  return HeaderView;
  
});