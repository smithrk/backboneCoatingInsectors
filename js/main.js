/**
 * Main config
 * 
 * Author: Kody Smith <kodysmith2010@gmail.com>
 * Filename: main.js
 * Require.js allows us to configure shortcut alias
 * 
 */

require.config({
  paths: {
    jquery: 'libs/jquery/jquery-min',
    underscore: 'libs/underscore/underscore-min',
    backbone: 'libs/backbone/backbone-min',
    templates: '../templates'
  }

});

require([
  // Load our app module and pass it to our definition function
  'app',
], function(App){
  // The "app" dependency is passed in as "App"
  App.initialize();
});