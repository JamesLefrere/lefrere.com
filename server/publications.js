Meteor.publish('singleArticle', function (slug) {
  return Articles.find({ slug: slug });
});

Meteor.publish('recentArticles', function (skip) {
  if (skip === 'undefined')
    skip = 0;
  return Articles.find({}, { limit: 2, sort: { time: -1 }, skip: skip });
});
