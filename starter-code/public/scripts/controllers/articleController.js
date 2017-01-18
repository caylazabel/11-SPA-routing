'use strict';

(function(module) {
  const articleController = {};
  // DONE: Setup a function that kicks off the fetching and rendering of articles, using the same
  // code that used to be in index.html.
  // Also be sure to hide all the main section elements, and reveal the #articles section:

articleController.init = function() {//eslint-disable-line
  Article.fetchAll(articleView.initIndexPage); //eslint-disable-line
  $('.tab-content').hide();
  $('#articles').fadeIn();
}



  module.articleController = articleController;
})(window);
