/**
 * 
 * Author: Kody Smith <kodysmith2010@gmail.com>
 * Filename: app.js
 * Require.js allows us to configure shortcut alias
 * 
 */
define([
  'jquery', 
  'underscore', 
  'backbone',
  'router', // Request router.js
  
], function($, _, Backbone, Router){
  var initialize = function(){
    // Pass in our Router module and call it's initialize function
    Router.initialize();
  };

  return { 
    initialize: initialize
  };
});