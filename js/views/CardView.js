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
      $('.resultsGrid .close').toggle('closeHidden');
      $('.resultsGrid .clicked').removeClass('clicked');
      $('.resultsGrid.grid .extendedDescription').addClass('hidden');
      $('.resultsGrid.grid .description').removeClass('hidden');
      this.class = "clicked";
      $('.clicked').removeClass('clicked');
      $(this.currentTarget).addClass('clicked');
      $(this.currentTarget).find('img:first').addClass('centeredImg');
      $(this.currentTarget).find('.resultObjectTitle').addClass('expandedTitle'); 
      $(this.currentTarget).find('.description').addClass('hidden');
      $(this.currentTarget).find('.extendedDescription').removeClass('hidden');
      $(this.currentTarget).find('.closeHidden').addClass('close');
      $(this.currentTarget).find('.closeHidden .close').removeClass('closeHidden');
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