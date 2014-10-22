/**
 * Footer View is to display the main site footer
 * template: footerTemplate.html
 */

define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/home/footerTemplate.html'

], function($, _, Backbone, footerTemplate){

  var FooterView = Backbone.View.extend({
    el: $("#footer"),
    render: function(){
      this.$el.html(footerTemplate);   
    }
  });

  return FooterView;
  
});