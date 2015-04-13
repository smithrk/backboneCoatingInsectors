/**
 * Movie Grid View processes data from MovieCollection to display to the user in Grid form
 * source data: MovieCollection
 * template: searchResultsGridTemplate.html
 */

define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/components/cardTemplate.html'
], function($, _, Backbone, cardTemplate){

  var CardView = Backbone.View.extend({
    el: $('.resultsGrid'),
    events: {
        'click a': 'clicked',
        'click .close': 'closeCard'
    },
    initalize: function(){
      this.el = $('#'+this.model.get('classID'));
    },
    clicked: function (event) {
      event.preventDefault();
      this.class = "clicked";
      $('.clicked').removeClass('clicked');
      $(event.currentTarget).addClass('clicked');
      $(event.currentTarget).find('img:first').addClass('centeredImg');
      $(event.currentTarget).find('.resultObjectTitle').addClass('expandedTitle'); 
      debugger
      $(event.currentTarget).find('.description').addClass('hidden');
      debugger
      $(event.currentTarget).find('.extended').removeClass('hidden');
      //this.model.get('expandedDescription')
    },
    closeCard: function(event) {
      var card = $(event.currentTarget).parent();
      card.find('.resultsGrid .clicked').removeClass('clicked');
      card.find('.description').removeClass('hidden');
      card.find('.extendedDescription').addClass('hidden');
    },
    contentHolder: function(){
      return this.compileTemplate();
    },
    compileTemplate: function(){
      var compiledTemplate = _.template( cardTemplate, this.model.attributes);
      return compiledTemplate;
    },
    render: function(){
      // display Something while searching is in progress so the user is aware of action
      //this.$el.html('<div class="searchLoader">Searching...</div>');
      // compile the view using the search results template, and the search result data returned
      
      
      this.$el.append(this.compileTemplate());
      
    }
  });
   return CardView;
});