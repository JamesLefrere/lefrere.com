Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: '404',
  yieldTemplates: {
    'footer': { to: 'footer' },
    'nav': { to: 'nav' }
  }
});

Router.map(function () {
  this.route('home', {
    path: '/',
    template: 'home',
    waitOn: function () {
      return Meteor.subscribe('recentArticles');
    },
    data: function () {
      document.title = 'James Lefrère | Drupal, Meteor JS, Web Development';
      return {
        articles: Articles.find({}, { sort: { time: -1 } })
      };
    },
    fastrender: true
  });
  this.route('articles', {
    path: 'articles',
    template: 'articles',
    waitOn: function () {
      return Meteor.subscribe('recentArticles');
    },
    data: function () {
      document.title = 'James Lefrère | Articles';
      return {
        articles: Articles.find({}, { sort: { time: -1 } })
      };
    },
    fastrender: true
  });
  this.route('article', {
    path: 'articles/:slug',
    template: 'article',
    waitOn: function () {
      return Meteor.subscribe('singleArticle', this.params.slug);
    },
    data: function () {
      var article = Articles.findOne({ slug: this.params.slug });
      document.title = 'James Lefrère | ' + article.title;
      return article;
    }
  });
  this.route('admin', {
    path: 'admin',
    template: 'admin'
  });
});