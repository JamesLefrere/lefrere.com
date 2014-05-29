Meteor.methods({
  'submitArticle': function (title, body) {
    var self = this;

    check(title, String);
    check(body, String);

    if (Articles.find({ title: title }).fetch().length)
      throw new Meteor.Error(403, 'There is another article with this title');

    self.data = {
      title: title,
      body: body,
      slug: _.slugify(title),
      time: (new Date()).getTime()
    };

    Articles.insert(self.data, function (err, res) {
      if (!err) {
        return res;
      } else throw new Meteor.Error(500, 'Could not insert article');
    });
  }
});